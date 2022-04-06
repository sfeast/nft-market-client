import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#0098ff'
        },
        secondary: {
            main: '#ff7c75'
        },
        text: {
            dark: '#3F3F3F',
            light: '#f6f6f6'
        },
        background: {
            main: '#FFFFFF'
        },
        grey: {
            light: '#c4c4c4'
        },
        black: {
            dark: '#000000'
        }
    },
    sizes: {
        app: {
            maxWidth: '1500px',
            padding: '15px'
        },
        header: {
            height: '70px'
        },
        grid: {
            gap: '30px'
        }
    },
    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    boxShadow: 'none !important',
                    textTransform: 'initial'
                }
            }
        },
        MuiBackdrop: {
            styleOverrides: {
                root: {
                    backdropFilter: 'blur(5px)'
                }
            }
        }
    }
});

export const SCGlobalStyles = createGlobalStyle`
  body {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu',
    'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    background-color: ${({ theme }) => theme.palette.background.main};
    color: ${({ theme }) => theme.palette.text.dark}
  }
  
  #root {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
