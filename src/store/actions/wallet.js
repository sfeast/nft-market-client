import { Signer } from 'casper-js-sdk';
import { toast } from 'react-toastify';

import { getData } from 'utils/helpers/xchRequests';
import { fromMotes } from 'utils/casper';

import { walletSelectors } from 'store/selectors';
import { SERVER_ADDRESS } from 'constants/config';
import { notifications } from 'utils/helpers/notifications';

export const WALLET_ACTION_TYPES = {
    SET_KEY: 'SET_KEY',
    SET_BALANCE: 'SET_BALANCE'
};

export const connectionRequest = () => async () => {
    Signer.sendConnectionRequest();
};

export const updateKey = () => async (dispatch, getState) => {
    const store = getState();
    const storedKey = walletSelectors.selectPublicKeyHash(store);

    try {
        const key = await Signer.getActivePublicKey();
        if (storedKey !== key) {
            const message = notifications.walletConnected(key);
            toast.success(message, { toastId: message });

            dispatch({
                type: WALLET_ACTION_TYPES.SET_KEY,
                payload: key
            });
        }
    } catch (error) {
        if (storedKey !== null) {
            const message = notifications.walletDisconnected;
            toast.warning(message, { toastId: message });

            dispatch({
                type: WALLET_ACTION_TYPES.SET_KEY,
                payload: null
            });
        }
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
        dispatch(updateKey());
    });
    window.addEventListener('signer:unlocked', msg => {
        if (msg.detail.isConnected) {
            dispatch(updateKey());
        }
    });
    window.addEventListener('signer:activeKeyChanged', msg => {
        if (msg.detail.isConnected) {
            dispatch(updateKey());
        }
    });
    window.addEventListener('signer:connected', msg => {
        dispatch(updateKey());
    });
    window.addEventListener('signer:disconnected', () => {
        dispatch(updateKey());
    });
};
