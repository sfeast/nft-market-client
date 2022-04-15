import PropTypes from 'prop-types';

import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import InputAdornment from '@mui/material/InputAdornment';
import Typography from '@mui/material/Typography';

import NumericInput from 'components/shared/NumericInput';
import ContentItem from 'components/shared/ContentItem';

import { TICKERS } from 'constants/config';
import { getPrice } from 'utils/normalizers/nftItem';

const SetPriceDialog = ({
    open,
    onClose,
    onSubmit,
    onChange,
    max,
    value,
    title,
    submitButtonTitle
}) => {
    return (
        <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
            <DialogTitle>{title}</DialogTitle>
            <DialogContent sx={{ display: 'grid', rowGap: '5px' }}>
                <NumericInput
                    autoFocus
                    fullWidth
                    type="number"
                    margin="dense"
                    id="name"
                    label="Price"
                    onChange={onChange}
                    InputProps={{
                        endAdornment: <InputAdornment position="end">{TICKERS.cspr}</InputAdornment>
                    }}
                    error={max ? max < 0 || max < value : max < 0}
                    value={value}
                    max={max || undefined}
                />
                {max && (
                    <ContentItem name="Your balance" flex="2">
                        <Typography variant="subtitle2" fontWeight="bold">
                            {getPrice(max, 2)}
                        </Typography>
                    </ContentItem>
                )}
            </DialogContent>
            <DialogActions>
                <Button onClick={onClose}>Cancel</Button>
                <Button
                    onClick={onSubmit}
                    variant="contained"
                    disabled={max ? Number(max) < Number(value) : false}
                >
                    {submitButtonTitle}
                </Button>
            </DialogActions>
        </Dialog>
    );
};

SetPriceDialog.propTypes = {
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    onChange: PropTypes.func.isRequired,
    max: PropTypes.number,
    value: PropTypes.number.isRequired,
    submitButtonTitle: PropTypes.string.isRequired
};

export default SetPriceDialog;
