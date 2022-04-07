import styled, { css } from 'styled-components';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';

export const baseAppStyles = css`
    width: 100%;
    max-width: ${({ theme }) => theme.sizes.app.maxWidth};
    padding-left: ${({ theme }) => theme.sizes.app.padding};
    padding-right: ${({ theme }) => theme.sizes.app.padding};
`;

export const StyledTextField = styled(TextField)`
    margin-top: 5px;
    margin-bottom: ${({ helperText }) => (helperText ? '22px' : '5px')};

    & .MuiFormHelperText-root {
        position: absolute;
        bottom: -22px;
    }
`;

// used for MUI components with (such as Checkbox, Radio, Switch) with labels
export const StyledFormControlLabel = styled(FormControlLabel)`
    border: 1px solid #c4c4c4;
    margin: 5px 0;
    border-radius: 4px;
`;

export const StyledFormFieldsContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: stretch;
`;
