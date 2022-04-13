import PropTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import { StyledAsteriskSign } from './styled';

const RequiredFieldLabel = ({ children, ...typographyProps }) => {
    return (
        <Typography fontSize="inherit" {...typographyProps}>
            {children}
            <StyledAsteriskSign>*</StyledAsteriskSign>
        </Typography>
    );
};

RequiredFieldLabel.propTypes = {
    children: PropTypes.oneOfType([PropTypes.string, PropTypes.element]).isRequired
};

export default RequiredFieldLabel;
