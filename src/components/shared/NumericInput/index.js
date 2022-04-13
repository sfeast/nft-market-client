import PropTypes from 'prop-types';

import TextField from '@mui/material/TextField';

const inputProp = {
    pattern: '[0-9]*',
    inputMode: 'numeric'
};

const NumericInput = props => {
    return <TextField size="small" {...props} type="number" inputProps={inputProp} />;
};

NumericInput.propTypes = {
    className: PropTypes.string
};
NumericInput.default = {
    className: ''
};

export default NumericInput;
