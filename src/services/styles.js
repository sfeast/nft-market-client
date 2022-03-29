import { createTheme } from '@mui/material/styles';
import { createGlobalStyle } from 'styled-components';

export const theme = createTheme({
    palette: {
        primary: {
            main: '#FF473D'
        },
        text: {
            primary: '#3F3F3F'
        },
        background: {
            primary: '#FFFFFF'
        }
    },
    sizes: {
        app: {
            maxWidth: '1500px',
            paddingLeft: '15px',
            paddingRight: '15px'
        },
        header: {
            height: '160px'
        },
        itemCard: {
            maxWidth: '600px',
            minWidth: '300px'
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
  
  #root {
    display: flex;
    align-items: center;
    flex-direction: column;
  }
`;
