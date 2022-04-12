import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { walletActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

export const useWallet = () => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    useEffect(() => {
        // workaround to make initialization async and wait for content script (Signer plugin) to be injected
        setTimeout(() => {
            dispatch(walletActions.initialize());
        }, 0);
    }, []);

    useEffect(() => {
        if (key) {
            dispatch(walletActions.updateBalance());
        }
    }, [key]);
};
