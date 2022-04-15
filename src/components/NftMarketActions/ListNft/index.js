import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import SetPriceDialog from 'components/NftMarketActions/SetPriceDialog';

import { marketActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const ListNft = ({ title, tokenId, listed, ...props }) => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState();

    useEffect(() => {
        if (isOpen && !key) {
            setIsOpen(false);
        }
    }, [key, isOpen]);

    const onOpen = () => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
        setPrice();
    };

    const onRemoveList = () => {
        dispatch(marketActions.cancelListing(tokenId, price));
    };

    const onList = () => {
        dispatch(marketActions.list(tokenId, price));
        setIsOpen(false);
        setPrice();
    };

    const onChange = e => {
        setPrice(e.target.value);
    };

    return (
        <>
            <Button
                onClick={listed ? onRemoveList : onOpen}
                variant="contained"
                color="secondary"
                sx={{ color: 'text.light', fontWeight: 'bold' }}
                {...props}
            >
                {listed ? 'Remove from sale' : 'List for sale'}
            </Button>

            <SetPriceDialog
                open={isOpen}
                onClose={onClose}
                onChange={onChange}
                value={price}
                onSubmit={onList}
                title="List for sale"
            />
        </>
    );
};

ListNft.propTypes = {
    tokenId: PropTypes.number.isRequired
};

export default ListNft;
