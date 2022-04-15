import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import SetPriceDialog from 'components/NftMarketActions/SetPriceDialog';

import { marketActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const MakeOffer = ({ tokenId, currentUserOfferPrice, ...props }) => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);
    const balance = useSelector(walletSelectors.selectBalance);

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

    const onMakeOffer = () => {
        dispatch(marketActions.makeOffer(tokenId, price));
        setIsOpen(false);
        setPrice();
    };

    const onWithdrawOffer = () => {
        dispatch(marketActions.withdrawOffer(tokenId));
        setIsOpen(false);
        setPrice();
    };

    const onChange = e => {
        setPrice(e.target.value);
    };

    return (
        <>
            <Button
                onClick={onOpen}
                variant="outlined"
                color="secondary"
                sx={{ fontWeight: 'bold' }}
                {...props}
            >
                {currentUserOfferPrice ? 'Withdraw offer' : 'Make offer'}
            </Button>

            <SetPriceDialog
                open={isOpen}
                onClose={onClose}
                onChange={onChange}
                value={currentUserOfferPrice || price}
                onSubmit={currentUserOfferPrice ? onWithdrawOffer : onMakeOffer}
                max={currentUserOfferPrice ? undefined : balance}
                disabledInput={Boolean(currentUserOfferPrice)}
                title={currentUserOfferPrice ? 'Withdraw my offer' : 'Make my offer'}
                submitButtonTitle={currentUserOfferPrice ? 'Withdraw' : 'Submit'}
            />
        </>
    );
};

MakeOffer.propTypes = {
    tokenId: PropTypes.number.isRequired,
    currentUserOfferPrice: PropTypes.number
};
MakeOffer.propTypes = {
    currentUserOfferPrice: undefined
};

export default MakeOffer;
