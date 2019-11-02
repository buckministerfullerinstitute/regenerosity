import React, {Fragment} from 'react';
import {hot} from 'react-hot-loader';
import { ThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

import theme from './theme';
import Homepage from '../components/HomePage'

const App = () => <Fragment>
    <ThemeProvider theme={theme}>
    <CssBaseline />
    <Homepage/>
    </ThemeProvider>
</Fragment>;

export default hot(module)(App);
