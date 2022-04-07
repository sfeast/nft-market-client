import styled from 'styled-components';
import { MEDIA_QUERIES } from 'constants/styles';

export const StyledItemsGrid = styled.div`
    display: grid;
    grid-gap: ${({ theme }) => theme.sizes.grid.gap};
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    grid-template-rows: min-content min-content;

    @media ${MEDIA_QUERIES.phone.small} {
        grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
    }
`;
