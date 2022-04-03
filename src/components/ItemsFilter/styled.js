import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledFieldsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;

export const StyledApplyButton = styled(Button)`
    position: sticky;
    bottom: 10px;
    width: 100%;
    z-index: 1;
    margin-top: 10px;
`;
