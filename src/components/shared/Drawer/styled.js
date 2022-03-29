import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButtonsContainer = styled.div`
    position: sticky;
    bottom: 0;
    width: 100%;
    padding: 10px;
    display: flex;
    justify-content: center;
    box-shadow: rgb(0 0 0 / 20%) 0 11px 11px 11px, rgb(0 0 0 / 14%) 0 3px 4px 0,
        rgb(0 0 0 / 12%) 0 1px 8px 0;
    background-color: ${({ theme }) => theme.palette.background.primary};
`;

export const StyledButton = styled(Button)`
    flex: 1;
    margin: 5px;
`;
