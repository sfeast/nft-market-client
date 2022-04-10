import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { StyledButton } from 'components/WalletConnect/styled';
import { truncate } from 'utils/helpers/string';

import { walletActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const WalletConnect = () => {
    const dispatch = useDispatch();
    const connected = useSelector(walletSelectors.selectConnected);
    const key = useSelector(walletSelectors.selectPublicKeyHash);
    const balance = useSelector(walletSelectors.selectBalance);

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

    const connect = e => {
        if (!key) {
            dispatch(walletActions.connectionRequest());
        }
    };

    return (
        <StyledButton
            onClick={connect}
            variant="contained"
            color="secondary"
            sx={{ color: 'text.light' }}
        >
            {key ? truncate(key, 14) : 'Connect'}
        </StyledButton>
    );
};

export default WalletConnect;
