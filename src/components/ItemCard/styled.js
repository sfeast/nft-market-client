import styled from 'styled-components';
import Grid from '@mui/material/Grid';

export const StyledItemCardGrid = styled(Grid)`
    border: 1px solid ${({ theme }) => theme.palette.text.primary};
`;
