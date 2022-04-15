import styled from 'styled-components';

export const StyledMarketActions = styled.div`
    width: 100%;
    padding: ${({ theme }) => theme.sizes.app.padding};
    border: 1px solid ${({ theme }) => theme.palette.grey[300]};
    display: grid;
    row-gap: ${({ theme }) => theme.sizes.app.padding};
`;
