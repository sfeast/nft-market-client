import { StyledTextField } from 'components/shared/styled';

const inputProp = {
    pattern: '[0-9]*',
    inputMode: 'numeric'
};

const NumericInput = props => {
    return <StyledTextField size="small" {...props} type="number" inputProps={inputProp} />;
};

export default NumericInput;
