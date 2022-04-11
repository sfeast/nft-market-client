import styled, { css } from 'styled-components';
import TextField from '@mui/material/TextField';
import { MEDIA_QUERIES } from 'constants/styles';

export const StyledTextField = styled(TextField)`
    margin-bottom: 20px;
`;

const FlexColumnCss = css`
    flex-direction: column;
    row-gap: ${({ theme }) => theme.sizes.app.padding};
    align-items: baseline;
`;

export const StyledContent = styled.div`
    display: flex;
    column-gap: ${({ theme }) => theme.sizes.app.padding};

    @media ${MEDIA_QUERIES.phone.small} {
        ${FlexColumnCss};
    }
    @media ${MEDIA_QUERIES.phone.medium} {
        ${FlexColumnCss};
    }
    @media ${MEDIA_QUERIES.phone.large} {
        ${FlexColumnCss};
    }
    @media ${MEDIA_QUERIES.smallDevice} {
        ${FlexColumnCss};
    }
    @media ${MEDIA_QUERIES.mediumDevice} {
        ${FlexColumnCss};
    }
`;

export const StyledFieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
    width: 100%;
`;

export const StyledCreateFormFields = styled.div`
    display: grid;
    row-gap: ${({ theme }) => theme.sizes.app.padding};
`;
