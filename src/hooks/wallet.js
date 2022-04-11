import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { walletActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

export const useWallet = () => {
    const dispatch = useDispatch();
    const connected = useSelector(walletSelectors.selectConnected);
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    useEffect(async () => {
        dispatch(walletActions.initialize());
    }, []);

    useEffect(async () => {
        if (connected) {
            dispatch(walletActions.updateKey());
        }
    }, [connected]);

    useEffect(async () => {
        if (key) {
            dispatch(walletActions.updateBalance());
        }
    }, [key]);
};
