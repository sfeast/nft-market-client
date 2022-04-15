import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';

import { marketActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';
import { getPrice } from 'utils/normalizers/nftItem';

const Index = ({ tokenId, price, ...props }) => {
    const dispatch = useDispatch();
    const balance = useSelector(walletSelectors.selectBalance);

    const onClick = () => {
        dispatch(marketActions.buyListing(tokenId, price));
    };

    return (
        <Tooltip title={`Your balance is ${getPrice(balance, 2)}`}>
            <Button
                onClick={onClick}
                variant="contained"
                color="secondary"
                sx={{ color: 'text.light', fontWeight: 'bold' }}
                {...props}
            >
                Buy now
            </Button>
        </Tooltip>
    );
};

export default Index;
