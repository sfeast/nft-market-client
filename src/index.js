import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import { ThemeProvider as MuiThemeProvider, StyledEngineProvider } from '@mui/material/styles';
import { ThemeProvider as SCThemeProvider } from 'styled-components';
import CssBaseline from '@mui/material/CssBaseline';
import 'react-toastify/dist/ReactToastify.min.css';

import { theme, SCGlobalStyles } from 'services/styles';
import store from 'services/redux';

import App from 'App';
import IpfsProvider from 'context/ipfs';
import ToastContainer from 'components/ToastContainer';

ReactDOM.render(
    <React.StrictMode>
        <StyledEngineProvider injectFirst>
            <MuiThemeProvider theme={theme}>
                <CssBaseline />
                <SCThemeProvider theme={theme}>
                    <SCGlobalStyles />
                    <Provider store={store}>
                        <IpfsProvider>
                            <App />
                            <ToastContainer />
                        </IpfsProvider>
                    </Provider>
                </SCThemeProvider>
            </MuiThemeProvider>
        </StyledEngineProvider>
    </React.StrictMode>,
    document.getElementById('root')
);
