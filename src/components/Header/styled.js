import styled, { css } from 'styled-components';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { baseAppStyles } from 'components/shared/styled';

export const StyledHeader = styled(AppBar)`
    color: ${({ theme }) => theme.palette.text.light};
    align-items: center;
    transition: 0.2s;
    height: ${({ theme }) => theme.sizes.header.height};
    width: 100%;
    background-color: transparent;
    box-shadow: none;

    &.header-with-bg {
        background-color: ${({ theme }) => theme.palette.primary.main};
    }
    &.header-with-shadow {
        box-shadow: 0 2px 4px -1px rgb(0 0 0 / 5%), 0px 4px 5px 0px rgb(0 0 0 / 5%),
            0px 1px 10px 0px rgb(0 0 0 / 0%);
    }
`;

export const StyledHeaderContent = styled(Toolbar)`
    ${baseAppStyles};
    display: flex;
    justify-content: space-between;
    height: 100%;

    button {
        font-weight: bold;
    }

    .header-search-button {
        margin: 0 25px 0 10px;
    }
`;

export const StyledButtonsWrapper = styled.div`
    display: flex;

    .header-button-space {
        margin-right: 30px;
    }
`;
