import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import { theme, SCGlobalStyles } from 'services/styles';

import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <SCThemeProvider theme={theme}>
                    <SCGlobalStyles />
                    <App />
                </SCThemeProvider>
            </MuiThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
