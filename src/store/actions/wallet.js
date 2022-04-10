import { Signer } from 'casper-js-sdk';
import { getData } from 'utils/helpers/xchRequests';
import { fromMotes } from 'utils/casper';

import { walletSelectors } from 'store/selectors';

export const WALLET_ACTION_TYPES = {
    SET_KEY: 'SET_KEY',
    SET_CONNECTED: 'SET_CONNECTED',
    SET_BALANCE: 'SET_BALANCE'
};

import { SERVER_ADDRESS } from 'constants/config';

export const connectionRequest = () => async () => {
    Signer.sendConnectionRequest();
};

const setConnected = connected => async dispatch => {
    dispatch({
        type: WALLET_ACTION_TYPES.SET_CONNECTED,
        payload: connected
    });
};

const setKey = key => async dispatch => {
    dispatch({
        type: WALLET_ACTION_TYPES.SET_KEY,
        payload: key
    });
};

// can we integrate this with setConnected? ex: key || activePublicKey
export const updateKey = () => async dispatch => {
    try {
        const activePublicKey = await Signer.getActivePublicKey();
        dispatch(setKey(activePublicKey));
    } catch (error) {
        console.log(error);
    }
};

export const updateBalance = () => async (dispatch, getState) => {
    const store = getState();
    const publicKeyHash = walletSelectors.selectPublicKeyHash(store);
    const balance = await getData(SERVER_ADDRESS + '/getAccountBalance', { publicKeyHash });

    if (balance) {
        dispatch({
            type: WALLET_ACTION_TYPES.SET_BALANCE,
            payload: fromMotes(balance)
        });
    }
};

export const initialize = () => async dispatch => {
    const isConnected = await Signer.isConnected();
    dispatch(setConnected(isConnected));

    window.addEventListener('signer:locked', msg => {
        dispatch(setKey(null));
        dispatch(setConnected(false));
    });
    window.addEventListener('signer:unlocked', msg => {
        if (msg.detail.isConnected) {
            dispatch(setKey(msg.detail.activeKey));
            dispatch(setConnected(true));
        }
    });
    window.addEventListener('signer:activeKeyChanged', msg => {
        if (msg.detail.isConnected) {
            dispatch(setKey(msg.detail.activeKey));
            dispatch(setConnected(true));
        }
    });
    window.addEventListener('signer:connected', msg => {
        dispatch(setKey(msg.detail.activeKey));
        dispatch(setConnected(true));
    });
    window.addEventListener('signer:disconnected', msg => {
        dispatch(setKey(null));
        dispatch(setConnected(false));
    });
};
