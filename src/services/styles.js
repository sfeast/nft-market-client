import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

import { COLORS, SIZES } from 'constants/styles';

export const theme = createTheme({
    palette: {
        primary: {
            main: COLORS.primary
        },
        text: {
            primary: COLORS.text
        },
        background: {
            primary: COLORS.background
        }
    },
    sizes: {
        header: {
            height: `${SIZES.headerHeight}px`
        }
    }
});

export const SCGlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.palette.background.primary};
    color: ${({ theme }) => theme.palette.text.primary}
  }
`;
