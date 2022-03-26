import styled from 'styled-components';

export const StyledPage = styled.div`
    width: 100%;
    height: 100vh;
    overflow-x: hidden;
    overflow-y: auto;
    margin-top: ${({ theme }) => theme.sizes.header.height};
`;
