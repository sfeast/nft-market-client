import styled from 'styled-components';

export const StyledHeader = styled.div`
    height: ${({ theme }) => theme.sizes.header.height};
    width: 100%;
    background-color: ${({ theme }) => theme.palette.background.primary};
    position: fixed;
    z-index: 1;
    top: 0;
`;
