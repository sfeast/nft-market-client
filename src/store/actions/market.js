import { DEPLOYS } from 'constants/config';

import { CEP47Client } from 'casper-cep47-js-client';
import { CasperClient, Contracts, RuntimeArgs, CLValueBuilder, CLByteArray } from 'casper-js-sdk';
import { Buffer } from 'buffer';

import { getDeploy, sendDeploy, signDeploy, toMotes } from 'utils/casper';
import { getData, postData } from 'utils/helpers/xchRequests';

import { walletSelectors } from 'store/selectors';

import {
    SERVER_ADDRESS,
    ENVIRONMENT,
    PAYMENT_AMOUNT,
    NFT_CONTRACT,
    MARKET_CONTRACT
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

export const mint = metaData => async (dispatch, getState) => {
    const store = getState();
    const clPublicKey = walletSelectors.selectCLPublicKey(store);

    try {
        const id = await getNewMintId();
        // TODO: store metadata on ipfs & provide the uri for minting
        //       - not sure if we'll upload to storage from client or server, current call goes to server but may be an issue for images?
        const meta = await storeMetaData(metaData);

        const deploy = await cep47.mint(
            clPublicKey,
            [id],
            [new Map([meta])],
            PAYMENT_AMOUNT.MINT_ONE,
            clPublicKey
        );

        dispatch(executeDeploy(deploy, DEPLOYS.mint));
    } catch (error) {
        console.log(error);
        alert(error);
    }
};

export const approveContractTransfer = token_id => async (dispatch, getState) => {
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
            PAYMENT_AMOUNT.DEPLOY,
            clPublicKey
        );

        dispatch(executeDeploy(deploy, DEPLOYS.approve));
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

        dispatch(executeDeploy(deploy, DEPLOYS.list));
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

        dispatch(executeDeploy(deploy, DEPLOYS.cancel_listing));
    } catch (error) {
        console.log(error);
        alert(error);
    }
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

const executeDeploy = (deploy, type) => async (dispatch, getState) => {
    const signedDeploy = await signDeploy(deploy);
    const hash = await sendDeploy(signedDeploy);

    // TODO: signals start of deploy - use to show loader/steps
    dispatch({
        type: MARKET_ACTION_TYPES.DEPLOY,
        payload: type
    });
    console.log('Deployed: https://testnet.cspr.live/deploy/' + hash);

    getDeploy(hash)
        .then(deploy => {
            //  signals successful deploy for UI to update
            dispatch({
                type: MARKET_ACTION_TYPES.COMPLETED_DEPLOY,
                payload: null
            });
            console.log('Deploy success');
        })
        .catch(error => {
            alert(error);
        });
};
