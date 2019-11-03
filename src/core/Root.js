import 'babel-polyfill';
import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Router from './Router'

const App = () => <Fragment>
    <ThemeProvider theme={theme}>
        <CssBaseline />
       <Router/>
    </ThemeProvider>
</Fragment>;

export default hot(module)(App);
