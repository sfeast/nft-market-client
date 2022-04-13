import styled from 'styled-components';
import Button from '@mui/material/Button/Button';
import DialogHeader from '@mui/material/DialogTitle';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog/Dialog';

export const StyledSearchButton = styled(Button)`
    width: 100%;
    margin: 0 30px;
    justify-content: flex-start;

    svg {
        margin: 0 10px;
    }
    &.MuiButton-root {
        padding: 5px 0;
        background-color: rgb(255 255 255 / 0.1);
        border-color: rgb(255 255 255 / 0.4);
        color: rgb(255 255 255 / 0.8);
        font-weight: 500;
        text-transform: unset;

        &:hover {
            background-color: rgb(255 255 255 / 0.2);
        }
    }
`;

export const StyledDialogBlur = styled(Dialog)`
    .MuiDialog-container {
        align-items: flex-start;
    }
`;

export const StyledDialogHeader = styled(DialogHeader)`
    padding: 0;
    border-bottom: 1px solid ${({ theme }) => theme.palette.grey[300]};
`;

export const StyledTextField = styled(TextField)`
    fieldset {
        border: none;
        outline: none;
    }
`;
