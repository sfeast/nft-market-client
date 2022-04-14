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

const ListNft = ({ title, tokenId, listed, ...props }) => {
    const dispatch = useDispatch();
    const key = useSelector(walletSelectors.selectPublicKeyHash);

    const [isOpen, setIsOpen] = useState(false);
    const [price, setPrice] = useState(0);

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
    };

    const onRemoveList = () => {
        dispatch(marketActions.cancelListing(tokenId, price));
    };

    const onList = () => {
        dispatch(marketActions.list(tokenId, price));
        setIsOpen(false);
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

            <Dialog open={isOpen} onClose={onClose} fullWidth maxWidth="sm">
                <DialogTitle>List for sale</DialogTitle>
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
                    <Button onClick={onList} variant="contained">
                        List
                    </Button>
                </DialogActions>
            </Dialog>
        </>
    );
};

ListNft.propTypes = {
    tokenId: PropTypes.number.isRequired
};

export default ListNft;
