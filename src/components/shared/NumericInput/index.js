import PropTypes from 'prop-types';

import { StyledTextField } from 'components/shared/styled';

const inputProp = {
    pattern: '[0-9]*',
    inputMode: 'numeric'
};

const NumericInput = props => {
    return <StyledTextField size="small" {...props} type="number" inputProps={inputProp} />;
};

NumericInput.propTypes = {
    className: PropTypes.string
};
NumericInput.default = {
    className: ''
};

export default NumericInput;
