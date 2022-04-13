import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

// mui default theme explorer - https://mui.com/customization/default-theme/
export const theme = createTheme({
    palette: {
        primary: {
            light: '#45b2ff',
            main: '#0098ff',
            dark: '#007ace'
        },
        secondary: {
            light: '#ff928d',
            main: '#ff7c75',
            dark: '#ea716b'
        },
        text: {
            main: '#3F3F3F',
            light: '#f6f6f6',
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

    background-color: ${({ theme }) => theme.palette.background.default};
    color: ${({ theme }) => theme.palette.text.main}
  }
  
  #root {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
