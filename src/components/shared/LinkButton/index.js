import { useNavigate } from 'react-router';
import PropTypes from 'prop-types';

import Button from '@mui/material/Button';

const LinkButton = ({ to, children, onClick, ...buttonProps }) => {
    const navigate = useNavigate();

    const handleClick = e => {
        navigate(to);
        onClick(e);
    };

    return (
        <Button {...buttonProps} onClick={handleClick}>
            {children}
        </Button>
    );
};

LinkButton.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired,
    to: PropTypes.string,
    onClick: PropTypes.func
};
LinkButton.defaultProps = {
    to: undefined,
    onClick: () => {}
};

export default LinkButton;
