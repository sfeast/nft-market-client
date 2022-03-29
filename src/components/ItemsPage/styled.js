import styled from 'styled-components';
import { MEDIA_QUERIES } from 'constants/styles';

export const StyledItemsPage = styled.div`
    gap: 10px;
    grid-template-columns: auto;
    display: grid;

    @media ${MEDIA_QUERIES.largeDevice} {
        grid-template-columns: 240px auto;
    }
    @media ${MEDIA_QUERIES.extraLargeDevice} {
        grid-template-columns: 320px auto;
    }
`;
