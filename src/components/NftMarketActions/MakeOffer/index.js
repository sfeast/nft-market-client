import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';

import NumericInput from 'components/shared/NumericInput';

import { marketActions } from 'store/actions';
import { walletSelectors } from 'store/selectors';
import { TICKERS } from 'constants/config';

const MakeOffer = ({ tokenId, ...props }) => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        if (isOpen && !key) {
            setIsOpen(false);
        }
    }, [key, isOpen]);

    const onOpen = e => {
        setIsOpen(true);
    };

    const onClose = () => {
        setIsOpen(false);
    };

    const onMakeOffer = () => {
        dispatch(marketActions.makeOffer(tokenId, price));
        setIsOpen(false);
    };

    return (
        <>
            <Button
                onClick={onOpen}
                variant="contained"
                color="secondary"
                sx={{ color: 'text.light', fontWeight: 'bold' }}
                {...props}
            >
                Make offer
            </Button>

            <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
                <DialogTitle>Make you offer</DialogTitle>
                <DialogContent>
                    <NumericInput
                        autoFocus
                        fullWidth
                        type="number"
                        margin="dense"
                        id="name"
                        label="Price"
                        onChange={e => setPrice(e.target.value)}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">{TICKERS.cspr}</InputAdornment>
                            )
                        }}
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={onClose}>Cancel</Button>
                    <Button onClick={onMakeOffer} variant="contained">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

MakeOffer.propTypes = {
    tokenId: PropTypes.number.isRequired
};

export default MakeOffer;
