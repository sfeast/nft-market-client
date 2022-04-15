import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import { truncate } from 'utils/helpers/string';

import { walletActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const WalletConnect = ({ title, ...props }) => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    const connect = e => {
        if (!key) {
            dispatch(walletActions.connectionRequest());
        }
    };

    return (
        <Button
            onClick={connect}
            variant="contained"
            color="secondary"
            sx={{ color: 'text.light', fontWeight: 'bold' }}
            {...props}
        >
            {key ? truncate(key, 14) : title}
        </Button>
    );
};

WalletConnect.propTypes = {
    title: PropTypes.string
};
WalletConnect.defaultProps = {
    title: 'Connect'
};

export default WalletConnect;
