import PropTypes from 'prop-types';
import { Form, useField } from 'react-final-form';

import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import InputAdornment from '@mui/material/InputAdornment';
import Checkbox from '@mui/material/Checkbox';

import { StyledApplyButton, StyledFieldsWrapper } from 'components/ItemsFilter/styled';
import Divider from 'components/shared/Divider';
import NumericInput from 'components/shared/NumericInput';

import { StyledFormControlLabel } from 'components/shared/styled';
import { parseNumberValue } from 'utils/helpers/form';
import { TICKERS } from 'constants/config';

const ItemsFilter = ({ handleSubmit }) => {
    const priceRangeFromField = useField('priceRangeFrom', {
        type: 'number',
        allowNull: true,
        parse: parseNumberValue,
        defaultValue: ''
    });
    const priceRangeToField = useField('priceRangeTo', {
        type: 'number',
        allowNull: true,
        parse: parseNumberValue,
        defaultValue: ''
    });
    const byNowStatusField = useField('byNowStatus', { type: 'checkbox', defaultValue: false });
    const newStatusField = useField('newStatus', { type: 'checkbox', defaultValue: false });
    const liveAuctionStatusField = useField('liveAuctionStatus', {
        type: 'checkbox',
        defaultValue: false
    });
    const hasOffersStatusField = useField('hasOffersStatus', {
        type: 'checkbox',
        defaultValue: false
    });

    return (
        <div>
            <StyledFieldsWrapper>
                <Divider title="Status" position="left" />
                <StyledFormControlLabel
                    control={<Checkbox {...byNowStatusField.input} />}
                    label="By Now"
                />
                <StyledFormControlLabel
                    control={<Checkbox {...newStatusField.input} />}
                    label="New"
                />
                <StyledFormControlLabel
                    control={<Checkbox {...liveAuctionStatusField.input} />}
                    label="Live Auction"
                />
                <StyledFormControlLabel
                    control={<Checkbox {...hasOffersStatusField.input} />}
                    label="Has Offers"
                />

                <Divider title={<Typography>Price range</Typography>} position="left" />
                <Grid container flexDirection="column">
                    <NumericInput
                        {...priceRangeFromField.input}
                        label="from"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">{TICKERS.cspr}</InputAdornment>
                            )
                        }}
                    />
                    <NumericInput
                        {...priceRangeToField.input}
                        label="to"
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end">{TICKERS.cspr}</InputAdornment>
                            )
                        }}
                    />
                </Grid>
            </StyledFieldsWrapper>
            <StyledApplyButton
                variant="contained"
                color="primary"
                sx={{ color: 'text.light' }}
                onClick={handleSubmit}
            >
                Apply
            </StyledApplyButton>
        </div>
    );
};

ItemsFilter.propTypes = {
    handleSubmit: PropTypes.func
};

const ItemsFilterForm = props => {
    const onSubmit = ({ values, form }) => {
        // submit values
    };

    return (
        <Form onSubmit={onSubmit} render={formProps => <ItemsFilter {...props} {...formProps} />} />
    );
};

export default ItemsFilterForm;
