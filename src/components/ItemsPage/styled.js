import styled from 'styled-components';
import { MEDIA_QUERIES } from 'constants/styles';

export const StyledItemsPage = styled.div`
    grid-template-columns: auto;
    display: grid;

    @media ${MEDIA_QUERIES.extraLargeDevice} {
        gap: ${({ theme }) => theme.sizes.grid.gap};
        grid-template-columns: 320px 0 auto;
    }
`;

export const StyledItemsGridWrapper = styled.div`
    padding-top: ${({ theme }) => theme.sizes.app.padding};
`;
