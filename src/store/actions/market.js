import { CEP47Client } from 'casper-cep47-js-client';
import { CasperClient, Contracts, RuntimeArgs, CLValueBuilder, CLByteArray } from 'casper-js-sdk';
import { Buffer } from 'buffer';
import { toast } from 'react-toastify';

import { getDeploy, sendDeploy, signDeploy, toMotes } from 'utils/casper';
import { getData, postData } from 'utils/helpers/xchRequests';
import { notifications } from 'utils/helpers/notifications';

import { walletSelectors } from 'store/selectors';
import { walletActions } from 'store/actions';

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

// FIXME: make these globally accessible? Only if used elsewhere
const cep47 = new CEP47Client(ENVIRONMENT.NODE_ADDRESS, ENVIRONMENT.CHAIN_NAME);
cep47.setContractHash(NFT_CONTRACT.HASH, NFT_CONTRACT.PACKAGE_HASH);
const casperClient = new CasperClient(ENVIRONMENT.NODE_ADDRESS);
const contract = new Contracts.Contract(casperClient);
contract.setContractHash(MARKET_CONTRACT.HASH, MARKET_CONTRACT.PACKAGE_HASH);

const loadMetaDataToIPFS = async (metaData, ipfs) => {
    try {
        const { cid: imageCID } = await ipfs.add({
            path: metaData.image.name,
            content: metaData.image
        });
        const { cid: metadataCID } = await ipfs.add(
            JSON.stringify({ ...metaData, image: `ipfs://${imageCID.toString()}` })
        );

        toast.info(notifications.saveToIpfsSuccess);

        return {
            imageCID,
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

        dispatch(executeDeploy(deploy, DEPLOY_STATE.APPROVE));
    } catch (error) {
        console.log(error);
        alert(error);
    }
};

export const list = (token_id, price) => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

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

        dispatch(executeDeploy(deploy, DEPLOY_STATE.LIST));
    } catch (error) {
        console.log(error);
        alert(error);
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

        dispatch(executeDeploy(deploy, DEPLOY_STATE.CANCEL_LISTING));
    } catch (error) {
        console.log(error);
        alert(error);
    }
};

export const buyListing = token_id => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

    const price = 1;
    // TODO: implement server side token listing price lookup? (or I think we'll already have it locally with nft item data)
    // const price = await getListingPrice(token_id);

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

        dispatch(executeDeploy(deploy, DEPLOY_STATE.BUY_LISTING));
    } catch (error) {
        console.log(error);
        alert(error);
    }
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

const storeMetaData = async meta => {
    return postData(SERVER_ADDRESS + '/storeMetaData', meta)
        .then(response => {
            return response;
        })
        .catch(error => {
            alert(error);
            throw Error('Deploy error: ' + error);
        });
};

const resetDeployState = () => async dispatch => {
    setTimeout(() => {
        dispatch({
            type: MARKET_ACTION_TYPES.COMPLETED_DEPLOY,
            payload: DEPLOY_STATE.RESET
        });
    }, 1000);
};

const setDeployError = () => async dispatch => {
    dispatch({
        type: MARKET_ACTION_TYPES.COMPLETED_DEPLOY,
        payload: DEPLOY_STATE.ERROR
    });
    dispatch(resetDeployState());
};

const setDeploySuccess = () => async dispatch => {
    dispatch({
        type: MARKET_ACTION_TYPES.COMPLETED_DEPLOY,
        payload: DEPLOY_STATE.SUCCESS
    });
    dispatch(resetDeployState());
};

const executeDeploy = (deploy, type) => async (dispatch, getState) => {
    const signedDeploy = await signDeploy(deploy);

    if (!signedDeploy) {
        dispatch(setDeployError());
        return;
    }
    const hash = await sendDeploy(signedDeploy);

    dispatch({
        type: MARKET_ACTION_TYPES.DEPLOY,
        payload: {
            type,
            hash
        }
    });
    console.log('Deployed: https://testnet.cspr.live/deploy/' + hash);

    getDeploy(hash)
        .then(deploy => {
            dispatch(setDeploySuccess());
        })
        .catch(error => {
            dispatch(setDeployError());
            // TODO: set error state for user messaging
            console.log(error);
        });
};
