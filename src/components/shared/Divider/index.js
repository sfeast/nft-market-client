import { memo } from 'react';
import PropTypes from 'prop-types';
import MuiDivider from '@mui/material/Divider';
import { StyledDivider } from 'components/shared/Divider/styled';

const Divider = ({ children, css, className, position }) => (
    <StyledDivider css={css} className={className} position={position}>
        {children}
        <MuiDivider />
    </StyledDivider>
);

Divider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    css: PropTypes.string,
    className: PropTypes.string,
    position: PropTypes.oneOf(['left', 'center', 'right'])
};
Divider.defaultProps = {
    children: undefined,
    css: '',
    className: '',
    position: 'left'
};

export default memo(Divider);
