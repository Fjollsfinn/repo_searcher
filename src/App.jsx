import React from 'react';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import cyan from '@material-ui/core/colors/cyan';
import Panel from './components/Panel';
import Header from './components/Header';

const styles = {
  '@global': {
    '*:root': {
      margin: 0,
      padding: 0,
      boxSizing: 'border-box',
      fontSize: '62.5%',
      backgroundColor: cyan[900],
    },
    body: {
      margin: 0,
      padding: 0,
    },
  },
};

const App = () => (
  <Grid container justify="center" direction="column">
    <Grid item><Header title="Github Repository Searcher" /></Grid>
    <Grid item><Panel /></Grid>
  </Grid>

);

export default injectSheet(styles)(App);
