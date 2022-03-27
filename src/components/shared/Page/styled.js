import styled from 'styled-components';

export const StyledPage = styled.div`
    width: 100%;
    max-width: 1500px;
    min-height: calc(100vh - ${({ theme }) => theme.sizes.header.height});
    overflow-x: hidden;
    overflow-y: auto;
    padding: ${({ theme }) => theme.sizes.page.padding};
    margin-top: ${({ theme }) => theme.sizes.header.height};
`;
