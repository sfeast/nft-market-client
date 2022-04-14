import { useDispatch } from 'react-redux';

import Button from '@mui/material/Button';

import { marketActions } from 'store/actions';

const Index = ({ tokenId, price, ...props }) => {
    const dispatch = useDispatch();

    const onClick = () => {
        dispatch(marketActions.buyListing(tokenId, price));
    };

    return (
        <Button
            onClick={onClick}
            variant="contained"
            color="secondary"
            sx={{ color: 'text.light', fontWeight: 'bold' }}
            {...props}
        >
            Buy now
        </Button>
    );
};

export default Index;
