import { useDispatch, useSelector } from 'react-redux';

import { StyledButton } from 'components/WalletConnect/styled';
import { truncate } from 'utils/helpers/string';

import { walletActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const WalletConnect = () => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);
    const balance = useSelector(walletSelectors.selectBalance);

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
