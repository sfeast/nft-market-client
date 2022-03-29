import styled from 'styled-components';
import { baseAppStyles } from 'components/shared/styled';

export const StyledHeader = styled.div`
    height: ${({ theme }) => theme.sizes.header.height};
    width: 100%;
    background-color: ${({ theme }) => theme.palette.background.primary};
    position: fixed;
    z-index: 1;
    top: 0;
    display: flex;
    justify-content: center;
    border-bottom: 1px solid black;
`;

export const StyledHeaderContent = styled.div`
    ${baseAppStyles};
`;
