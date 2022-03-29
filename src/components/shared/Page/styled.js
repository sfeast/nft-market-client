import styled from 'styled-components';

export const StyledPage = styled.div`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.app.maxWidth};
    min-height: calc(100vh - ${({ theme }) => theme.sizes.header.height});
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: ${({ theme }) => theme.sizes.header.height};
`;
