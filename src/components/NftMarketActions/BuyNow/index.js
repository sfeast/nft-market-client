import { useDispatch, useSelector } from 'react-redux';

import Button from '@mui/material/Button';

import { marketActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const Index = ({ tokenId, price, ...props }) => {
    const dispatch = useDispatch();
    const balance = useSelector(walletSelectors.selectBalance);

    const onClick = () => {
        dispatch(marketActions.buyListing(tokenId, price));
    };

    return (
        <Button
            onClick={onClick}
            variant="contained"
            color="secondary"
            sx={{ color: 'text.light', fontWeight: 'bold' }}
            disabled={Number(balance) < Number(price)}
            {...props}
        >
            Buy now
        </Button>
    );
};

export default Index;
