import PropTypes from 'prop-types';
import MuiDrawer from '@mui/material/Drawer';

import { StyledButton, StyledButtonsContainer } from 'components/shared/Drawer/styled';

const Drawer = ({ onSubmit, onCancel, form, children, ...muiDrawerProps }) => {
    return (
        <MuiDrawer {...muiDrawerProps}>
            {children}
            {form && (
                <StyledButtonsContainer>
                    <StyledButton variant="contained" onClick={onCancel}>
                        Cancel
                    </StyledButton>
                    <StyledButton variant="contained" onClick={onSubmit}>
                        Save
                    </StyledButton>
                </StyledButtonsContainer>
            )}
        </MuiDrawer>
    );
};

Drawer.propTypes = {
    anchor: PropTypes.oneOf(['top', 'bottom', 'left', 'right']),
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
    children: PropTypes.element.isRequired,
    onSubmit: PropTypes.func,
    onCancel: PropTypes.func,
    form: PropTypes.bool
};
Drawer.defaultProps = {
    onSubmit: () => {},
    onCancel: () => {},
    form: false
};

export default Drawer;
