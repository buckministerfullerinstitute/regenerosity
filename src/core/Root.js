import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import GoogleFontLoader from 'react-google-font-loader';

import theme from './theme';
import Router from './Router'

const App = () => <Fragment>
    <ThemeProvider theme={theme}>
    <GoogleFontLoader
      fonts={[
        {
          font: 'Mukta Malar',
          weights: [400],
        },
        {
          font: 'Open Sans',
          weights: [300, 400, 700, 800],
        },
      ]}
    />
        <CssBaseline />
       <Router/>
    </ThemeProvider>
</Fragment>;

export default hot(module)(App);
