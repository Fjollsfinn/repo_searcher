import React, { Component } from 'react';

import Grid from '@material-ui/core/Grid';
import Panel from '../components/Panel';
import Header from '../components/Header';

class MainPage extends Component {
    render() {
        return (
          <Grid container justify="center" direction="column">
            <Grid item><Header /></Grid>
            <Grid item><Panel /></Grid>
          </Grid>
        );
    }
}

export default MainPage;
