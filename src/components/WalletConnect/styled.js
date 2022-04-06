import styled from 'styled-components';
import Button from '@mui/material/Button';

export const StyledButton = styled(Button)`
    max-width: 200px;
    display: block;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    font-weight: bold;
`;
