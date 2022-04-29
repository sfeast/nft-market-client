/* eslint-disable no-use-before-define */
import { CEP47Client } from 'casper-cep47-js-client';
import { CasperClient, Contracts, RuntimeArgs, CLValueBuilder, CLByteArray } from 'casper-js-sdk';
import { Buffer } from 'buffer';
import { toast } from 'react-toastify';

import { getDeploy, sendDeploy, signDeploy, toMotes, extractDeployDetails } from 'utils/casper';
import { getData, postData } from 'utils/helpers/xchRequests';
import { notifications } from 'utils/helpers/notifications';

import { walletSelectors } from 'store/selectors';
import { walletActions, nftActions } from 'store/actions';

import {
    SERVER_ADDRESS,
    ENVIRONMENT,
    PAYMENT_AMOUNT,
    NFT_CONTRACT,
    MARKET_CONTRACT,
    DEPLOY_STATE
} from 'constants/config';

export const MARKET_ACTION_TYPES = {
    DEPLOY: 'DEPLOY',
    COMPLETED_DEPLOY: 'COMPLETED_DEPLOY'
};

const cep47 = new CEP47Client(ENVIRONMENT.NODE_ADDRESS, ENVIRONMENT.CHAIN_NAME);
cep47.setContractHash(NFT_CONTRACT.HASH, NFT_CONTRACT.PACKAGE_HASH);
const casperClient = new CasperClient(ENVIRONMENT.NODE_ADDRESS);
const contract = new Contracts.Contract(casperClient);
contract.setContractHash(MARKET_CONTRACT.HASH, MARKET_CONTRACT.PACKAGE_HASH);

const loadMetaDataToIPFS = async metaData => {
    try {
        const metaDataProcessToast = toast.info(notifications.saveToIpfsStarted, {
            render: notifications.saveToIpfsStarted,
            type: toast.TYPE.INFO,
            autoClose: false,
            closeOnClick: false,
            isLoading: true
        });

        const formData = new FormData();
        formData.append('file', metaData.image);
        const { IpfsHash: imageCID } = await fetch(
            'https://api.pinata.cloud/pinning/pinFileToIPFS',
            {
                method: 'POST',
                body: formData,
                headers: {
                    pinata_api_key: '13bc2790bd7fd6eca42b',
                    pinata_secret_api_key:
                        '7d3dcd42e2f38b333ce82308262fdb94678f20e4680980d87c0cd70a45d639bf'
                }
            }
        ).then(res => res.json());

        const { IpfsHash: metadataCID } = await fetch(
            'https://api.pinata.cloud/pinning/pinJSONToIPFS',
            {
                method: 'POST',
                body: JSON.stringify({ ...metaData, image: `ipfs://${imageCID}` }),
                headers: {
                    'Content-Type': 'application/json',
                    pinata_api_key: '13bc2790bd7fd6eca42b',
                    pinata_secret_api_key:
                        '7d3dcd42e2f38b333ce82308262fdb94678f20e4680980d87c0cd70a45d639bf'
                }
            }
        ).then(res => res.json());

        toast.update(metaDataProcessToast, {
            type: toast.TYPE.SUCCESS,
            render: notifications.saveToIpfsSuccess,
            autoClose: true,
            closeOnClick: true,
            isLoading: false
        });

        return {
            metadataCID
        };
    } catch (err) {
        toast.warning(
            notifications.saveToIpfsFailed + notifications.wait + notifications.andTryAgain
        );
    }
};

export const mint = (metaData, ipfs) => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);
    const key = walletSelectors.selectPublicKeyHash(store);

    if (!key) {
        dispatch(walletActions.connectionRequest());
        const message = notifications.connectWallet + notifications.andTryAgain;
        toast.warning(message, { toastId: message });
        return;
    }

    try {
        const id = await getNewMintId();

        const { metadataCID } = await loadMetaDataToIPFS(metaData, ipfs);

        const deploy = await cep47.mint(
            clPublicKey,
            [id],
            [new Map([['token_uri', metadataCID.toString()]])],
            PAYMENT_AMOUNT.MINT_ONE,
            clPublicKey
        );

        dispatch(executeDeploy(deploy, DEPLOY_STATE.MINT));
    } catch (error) {
        console.log(error);
    }
};

export const list = (token_id, price) => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

    if (!(await dispatch(verifyTransferApproval(token_id)))) {
        return;
    }

    try {
        const runtimeArgs = RuntimeArgs.fromMap({
            token_id: CLValueBuilder.string(token_id),
            token_contract_hash: CLValueBuilder.string(
                NFT_CONTRACT.HASH.replace('hash', 'contract')
            ),
            price: CLValueBuilder.u512(toMotes(price))
        });

        const deploy = await contract.callEntrypoint(
            'create_listing',
            runtimeArgs,
            clPublicKey,
            ENVIRONMENT.CHAIN_NAME,
            PAYMENT_AMOUNT.DEPLOY
        );

        await dispatch(executeDeploy(deploy, DEPLOY_STATE.LIST));
        dispatch(nftActions.loadNft(NFT_CONTRACT.PACKAGE_HASH.match(/hash-(.*)/)[1], token_id));
    } catch (error) {
        console.log(error);
    }
};

export const cancelListing = token_id => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

    try {
        const runtimeArgs = RuntimeArgs.fromMap({
            token_id: CLValueBuilder.string(token_id),
            token_contract_hash: CLValueBuilder.string(
                NFT_CONTRACT.HASH.replace('hash', 'contract')
            )
        });

        const deploy = await contract.callEntrypoint(
            'cancel_listing',
            runtimeArgs,
            clPublicKey,
            ENVIRONMENT.CHAIN_NAME,
            PAYMENT_AMOUNT.DEPLOY
        );

        await dispatch(executeDeploy(deploy, DEPLOY_STATE.CANCEL_LISTING));
        dispatch(nftActions.loadNft(NFT_CONTRACT.PACKAGE_HASH.match(/hash-(.*)/)[1], token_id));
    } catch (error) {
        console.log(error);
    }
};

export const buyListing = (token_id, price) => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

    try {
        const runtimeArgs = RuntimeArgs.fromMap({
            token_id: CLValueBuilder.string(token_id),
            token_contract_hash: CLValueBuilder.string(
                NFT_CONTRACT.HASH.replace('hash', 'contract')
            ),
            market_contract_hash: CLValueBuilder.string(
                MARKET_CONTRACT.HASH.replace('hash', 'contract')
            ),
            entry_point_name: CLValueBuilder.string('buy_listing'),
            amount: CLValueBuilder.u512(toMotes(parseInt(price)))
        });

        const paymentBinary = await getPaymentBinary();

        const deploy = await contract.install(
            paymentBinary,
            runtimeArgs,
            PAYMENT_AMOUNT.INSTALL,
            clPublicKey,
            ENVIRONMENT.CHAIN_NAME
        );

        await dispatch(executeDeploy(deploy, DEPLOY_STATE.BUY_LISTING));
        dispatch(nftActions.loadNft(NFT_CONTRACT.PACKAGE_HASH.match(/hash-(.*)/)[1], token_id));
        dispatch(walletActions.updateBalance());
    } catch (error) {
        console.log(error);
    }
};

export const makeOffer = (token_id, price) => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

    try {
        const runtimeArgs = RuntimeArgs.fromMap({
            token_id: CLValueBuilder.string(token_id),
            token_contract_hash: CLValueBuilder.string(
                NFT_CONTRACT.HASH.replace('hash', 'contract')
            ),
            market_contract_hash: CLValueBuilder.string(
                MARKET_CONTRACT.HASH.replace('hash', 'contract')
            ),
            entry_point_name: CLValueBuilder.string('make_offer'),
            amount: CLValueBuilder.u512(toMotes(parseInt(price)))
        });

        const paymentBinary = await getPaymentBinary();

        const deploy = await contract.install(
            paymentBinary,
            runtimeArgs,
            PAYMENT_AMOUNT.INSTALL,
            clPublicKey,
            ENVIRONMENT.CHAIN_NAME
        );

        await dispatch(executeDeploy(deploy, DEPLOY_STATE.MAKE_OFFER));
        dispatch(nftActions.loadNft(NFT_CONTRACT.PACKAGE_HASH.match(/hash-(.*)/)[1], token_id));
        dispatch(walletActions.updateBalance());
    } catch (error) {
        console.log(error);
    }
};

export const withdrawOffer = token_id => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

    try {
        const runtimeArgs = RuntimeArgs.fromMap({
            token_id: CLValueBuilder.string(token_id),
            token_contract_hash: CLValueBuilder.string(
                NFT_CONTRACT.HASH.replace('hash', 'contract')
            )
        });

        const deploy = await contract.callEntrypoint(
            'withdraw_offer',
            runtimeArgs,
            clPublicKey,
            ENVIRONMENT.CHAIN_NAME,
            PAYMENT_AMOUNT.DEPLOY
        );

        await dispatch(executeDeploy(deploy, DEPLOY_STATE.WITHDRAW_OFFER));
        dispatch(nftActions.loadNft(NFT_CONTRACT.PACKAGE_HASH.match(/hash-(.*)/)[1], token_id));
        dispatch(walletActions.updateBalance());
    } catch (error) {
        console.log(error);
    }
};

export const acceptOffer = (token_id, accepted_account) => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

    if (!(await dispatch(verifyTransferApproval(token_id)))) {
        return;
    }

    try {
        const runtimeArgs = RuntimeArgs.fromMap({
            token_id: CLValueBuilder.string(token_id),
            token_contract_hash: CLValueBuilder.string(
                NFT_CONTRACT.HASH.replace('hash', 'contract')
            ),
            accepted_offer: CLValueBuilder.string(`account-hash-${accepted_account}`)
        });

        const deploy = await contract.callEntrypoint(
            'accept_offer',
            runtimeArgs,
            clPublicKey,
            ENVIRONMENT.CHAIN_NAME,
            PAYMENT_AMOUNT.DEPLOY
        );

        await dispatch(executeDeploy(deploy, DEPLOY_STATE.ACCEPT_OFFER));
        dispatch(nftActions.loadNft(NFT_CONTRACT.PACKAGE_HASH.match(/hash-(.*)/)[1], token_id));
        dispatch(walletActions.updateBalance());
    } catch (error) {
        console.log(error);
    }
};

export const approveTransfer = token_id => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);
    const hex = Uint8Array.from(
        Buffer.from(MARKET_CONTRACT.PACKAGE_HASH.replace('hash-', ''), 'hex')
    );
    const package_hash = new CLByteArray(hex);

    try {
        const deploy = await cep47.approve(
            package_hash,
            [token_id],
            PAYMENT_AMOUNT.APPROVE,
            clPublicKey
        );

        await dispatch(executeDeploy(deploy, DEPLOY_STATE.APPROVE));
    } catch (error) {
        console.log(error);
    }
};

export const verifyTransferApproval = token_id => async dispatch => {
    if (!(await dispatch(hasTransferApproval(token_id)))) {
        await dispatch(approveTransfer(token_id));
        return await dispatch(hasTransferApproval(token_id));
    }
    return true;
};

export const hasTransferApproval = token_id => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);
    const publicKeyHash = walletSelectors.selectPublicKeyHash(store);
    const allowance = await getData(SERVER_ADDRESS + '/getAllowance', { publicKeyHash, token_id });
    return allowance.replace('account-', '') === MARKET_CONTRACT.PACKAGE_HASH;
};

const getPaymentBinary = async () => {
    return fetch(`${process.env.PUBLIC_URL}/contract.wasm`, {
        headers: {
            'Content-Type': 'application/wasm'
        }
    })
        .then(response => response.arrayBuffer())
        .then(bytes => new Uint8Array(bytes));
};

const getNewMintId = async () => {
    const id = await getData(SERVER_ADDRESS + '/getMintId');
    return id;
};

const resetDeployState = () => async dispatch => {
    setTimeout(() => {
        dispatch({
            type: MARKET_ACTION_TYPES.COMPLETED_DEPLOY,
            payload: {
                type: DEPLOY_STATE.RESET,
                details: null
            }
        });
    }, 1000);
};

const setDeployError = () => async dispatch => {
    dispatch({
        type: MARKET_ACTION_TYPES.COMPLETED_DEPLOY,
        payload: {
            type: DEPLOY_STATE.ERROR,
            details: null
        }
    });
    dispatch(resetDeployState());
};

const setDeploySuccess = details => async dispatch => {
    dispatch({
        type: MARKET_ACTION_TYPES.COMPLETED_DEPLOY,
        payload: {
            type: DEPLOY_STATE.SUCCESS,
            details
        }
    });
    dispatch(resetDeployState());
};

const executeDeploy = (deploy, type) => async (dispatch, getState) => {
    const signedDeploy = await signDeploy(deploy);

    if (!signedDeploy) {
        dispatch(setDeployError());
        return Promise.reject();
    }
    const hash = await sendDeploy(signedDeploy);

    dispatch({
        type: MARKET_ACTION_TYPES.DEPLOY,
        payload: {
            type,
            details: { hash }
        }
    });
    console.log('Deployed: https://testnet.cspr.live/deploy/' + hash);

    return getDeploy(hash)
        .then(response => {
            const details = extractDeployDetails(response.deploy);
            dispatch(setDeploySuccess(details));
        })
        .catch(error => {
            dispatch(setDeployError());
            // TODO: set error state for user messaging
            console.log(error);
        });
};
