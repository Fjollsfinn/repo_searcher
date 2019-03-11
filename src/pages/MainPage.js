import React, { Component } from 'react'
import '../css/mainPage.css';

import Grid from '@material-ui/core/Grid';
import Panel from '../components/Panel';

class MainPage extends Component {
    render() {
        return (
            <Grid container className="main-container">
                <Grid item className="project-name">Github Repozitory Searcher</Grid>
                <Grid item className="panel">
                    <Panel />
                </Grid>
            </Grid>
        )
    }
}

export default MainPage;