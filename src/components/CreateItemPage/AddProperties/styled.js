import styled from 'styled-components';

export const StyledFieldsContainer = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr auto;
    column-gap: ${({ theme }) => theme.sizes.app.padding};
`;

export const StyledAddProperties = styled.div`
    display: grid;
    row-gap: ${({ theme }) => theme.sizes.app.padding};
`;

export const StyledPropertiesContainer = styled.div`
    display: grid;
    row-gap: ${({ theme }) => theme.sizes.app.padding};
`;
