import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import styled from 'styled-components';

export const StyledSwipeableDrawer = styled(SwipeableDrawer)`
    .MuiPaper-root {
        padding: ${({ theme }) => theme.sizes.app.padding};
        display: flex;
        flex-direction: column;
        align-items: center;

        & > * {
            margin-bottom: 15px;
        }
    }
`;
