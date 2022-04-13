import styled, { css } from 'styled-components';
import IconButton from '@mui/material/IconButton';

const ActiveDropzoneCss = css`
    border-color: ${({ theme }) => theme.palette.grey[300]};
    background-color: ${({ theme }) => theme.palette.grey[300]};
    background-blend-mode: darken;

    & > .MuiSvgIcon-root {
        display: block;
        fill: #fff;
    }
`;
const NotActiveDropzoneCss = css`
    border-color: ${({ theme }) => theme.palette.grey[300]};
    background-color: unset;

    & > .MuiSvgIcon-root {
        fill: ${({ theme }) => theme.palette.grey[300]};
    }
`;
const DropzoneWithPreviewCss = css`
    border: none;
    background-image: url('${({ previewUrl }) => previewUrl}');

    & > .MuiSvgIcon-root {
        display: none;
    }

    &:hover {
        .MuiSvgIcon-root {
            fill: #fff;
        }
    }
`;

export const StyledDropzone = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    width: calc(100vw - ${({ theme }) => theme.sizes.app.padding} * 2);
    max-width: ${({ width }) => width || '100%'};
    padding-top: 100%;
    transition: 0.2s;
    border: 3px dashed;
    border-radius: 10px;
    cursor: pointer;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;

    & > .MuiSvgIcon-root {
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        transition: 0.2s;
        font-size: 80px;
    }

    ${({ isDragActive }) => (isDragActive ? ActiveDropzoneCss : NotActiveDropzoneCss)};
    ${({ previewUrl }) => (previewUrl ? DropzoneWithPreviewCss : '')};

    &:hover {
        ${ActiveDropzoneCss};
    }
`;

export const StyledHintMessage = styled.div`
    opacity: 0.6;
    font-size: 12px;
`;

export const StyledRemoveButton = styled(IconButton)`
    position: absolute;
    top: 10px;
    right: 10px;

    .MuiSvgIcon-root {
        font-size: inherit;
    }
`;
