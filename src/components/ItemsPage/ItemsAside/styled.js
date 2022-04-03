import styled from 'styled-components';

import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

export const StyledItemsAside = styled.aside`
    position: sticky;
    top: ${({ theme }) => theme.sizes.header.height};
    left: 0;
    height: calc(100vh - ${({ theme }) => theme.sizes.header.height});
    overflow: auto;
`;

export const StyledFilterButton = styled(Button)`
    width: 45%;
    position: fixed;
    z-index: 1;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
`;

export const StyledDrawer = styled(Drawer)`
    .MuiDrawer-paper {
        padding: 20px 20px 0 20px;
    }
`;
