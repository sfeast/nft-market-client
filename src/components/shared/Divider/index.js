import { memo } from 'react';
import PropTypes from 'prop-types';
import MuiDivider from '@mui/material/Divider';
import { StyledDivider } from 'components/shared/Divider/styled';

const Divider = ({ title, css, className, position }) => (
    <StyledDivider css={css} className={className} position={position}>
        {title}
        <MuiDivider />
    </StyledDivider>
);

Divider.propTypes = {
    title: PropTypes.oneOfType([PropTypes.string, PropTypes.element, null]),
    css: PropTypes.string,
    className: PropTypes.string,
    position: PropTypes.oneOf(['left', 'center', 'right'])
};
Divider.defaultProps = {
    title: null,
    css: '',
    className: '',
    position: 'left'
};

export default memo(Divider);
