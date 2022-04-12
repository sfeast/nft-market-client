import { Signer } from 'casper-js-sdk';
import { toast } from 'react-toastify';

import { getData } from 'utils/helpers/xchRequests';
import { fromMotes } from 'utils/casper';
import { truncate } from 'utils/helpers/string';

import { walletSelectors } from 'store/selectors';
import { SERVER_ADDRESS } from 'constants/config';

export const WALLET_ACTION_TYPES = {
    SET_KEY: 'SET_KEY',
    SET_BALANCE: 'SET_BALANCE'
};

export const connectionRequest = () => async () => {
    Signer.sendConnectionRequest();
};

export const updateKey = key => async dispatch => {
    try {
        const activePublicKey = await Signer.getActivePublicKey();
        dispatch({
            type: WALLET_ACTION_TYPES.SET_KEY,
            payload: key || activePublicKey
        });
    } catch (error) {
        dispatch({
            type: WALLET_ACTION_TYPES.SET_KEY,
            payload: key || null
        });
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
    dispatch(updateKey());

    window.addEventListener('signer:locked', () => {
        toast.warning('Wallet is disconnected');
        dispatch(updateKey(null));
    });
    window.addEventListener('signer:unlocked', msg => {
        if (msg.detail.isConnected) {
            const key = msg.detail.activeKey;
            toast.success(`Wallet is connected: ${truncate(key, 20, '..')}`, { toastId: key });
            dispatch(updateKey(key));
        }
    });
    window.addEventListener('signer:activeKeyChanged', msg => {
        if (msg.detail.isConnected) {
            const key = msg.detail.activeKey;
            toast.success(`Wallet is connected: ${truncate(key, 20, '..')}`, { toastId: key });
            dispatch(updateKey(key));
        }
    });
    window.addEventListener('signer:connected', msg => {
        const key = msg.detail.activeKey;
        toast.success(`Wallet is connected: ${truncate(key, 20, '..')}`, { toastId: key });
        dispatch(updateKey(key));
    });
    window.addEventListener('signer:disconnected', () => {
        toast.warning('Wallet is disconnected');
        dispatch(updateKey(null));
    });
};
