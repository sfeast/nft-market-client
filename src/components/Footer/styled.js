import styled from 'styled-components';

export const StyledFooter = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    border-top: 1px solid black;
`;

export const StyledFooterContent = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.app.maxWidth};
`;
