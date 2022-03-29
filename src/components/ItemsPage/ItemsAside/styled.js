import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledItemsAside = styled.aside`
    position: sticky;
    top: ${({ theme }) => theme.sizes.header.height};
    left: 0;
    height: calc(100vh - ${({ theme }) => theme.sizes.header.height});
    background: gainsboro;
`;

export const StyledButton = styled(Button)`
    width: 30%;
    position: fixed;
    bottom: 20px;
    left: 0;
    right: 0;
    margin: auto;
`;
