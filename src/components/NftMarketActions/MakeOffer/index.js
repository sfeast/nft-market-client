import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

import SetPriceDialog from 'components/NftMarketActions/SetPriceDialog';

import { marketActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';

const MakeOffer = ({ tokenId, ...props }) => {
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
                Make offer
            </Button>

            <SetPriceDialog
                open={isOpen}
                onClose={onClose}
                onChange={onChange}
                value={price}
                onSubmit={onMakeOffer}
                max={balance}
                title="Make you offer"
                submitButtonTitle="Submit"
            />
        </>
    );
};

MakeOffer.propTypes = {
    tokenId: PropTypes.number.isRequired
};

export default MakeOffer;
