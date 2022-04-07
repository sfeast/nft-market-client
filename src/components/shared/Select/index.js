import PropTypes from 'prop-types';

import {
    StyledLabel,
    StyledSelect,
    StyledSelectWrapper,
    StyledWrapper
} from 'components/shared/Select/styled';

const Select = ({ children, label, name, onChange, className }) => {
    return (
        <StyledWrapper className={className}>
            {label && <StyledLabel htmlFor="">{label}</StyledLabel>}
            <StyledSelectWrapper>
                <StyledSelect name={name} id={label} onChange={onChange}>
                    {children}
                </StyledSelect>
            </StyledSelectWrapper>
        </StyledWrapper>
    );
};

Select.propTypes = {
    children: PropTypes.oneOfType([PropTypes.element, PropTypes.arrayOf(PropTypes.element)])
        .isRequired,
    onChange: PropTypes.func.isRequired,
    className: PropTypes.string,
    name: PropTypes.string,
    label: PropTypes.string
};
Select.defaultProps = {
    className: '',
    label: undefined,
    name: ''
};

export default Select;
