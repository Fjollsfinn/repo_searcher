import React, { Component } from 'react';

import Panel from '../components/Panel';
import Header from '../components/Header';
import Grid from '@material-ui/core/Grid';

class MainPage extends Component {
    render() {
        return (
            <Grid container justify='center'>
                <Grid item><Header /></Grid>
                <Grid item><Panel /></Grid>
            </Grid>
        )
    }
}

export default MainPage;