import styled, { css } from 'styled-components';
import FormControlLabel from '@mui/material/FormControlLabel';

export const baseAppStyles = css`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.app.maxWidth};
    padding-left: ${({ theme }) => theme.sizes.app.padding};
    padding-right: ${({ theme }) => theme.sizes.app.padding};
`;

// used for MUI components with (such as Checkbox, Radio, Switch) with labels
export const StyledFormControlLabel = styled(FormControlLabel)`
    margin: 5px 0;
    border: 1px solid #c4c4c4;
    border-radius: 4px;
`;
