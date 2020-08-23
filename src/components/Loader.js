import React from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import injectSheet from 'react-jss';

const styles = {
    loader: {
        color: 'white',
    },
};

const Progress = ({ classes }) => <CircularProgress className={classes.loader} />;

const StyledProgress = injectSheet(styles)(Progress);

function Loader() {
    return <StyledProgress />;
}

export default Loader;
