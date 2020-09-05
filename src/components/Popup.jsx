import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import Clear from '@material-ui/icons/Clear';
import Typography from '@material-ui/core/Typography';
import cyan from '@material-ui/core/colors/cyan';

const styles = {
  popup: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translateX(-50%) translateY(-50%)',
    backgroundColor: 'white',
    width: '40rem',
    height: 'auto',
    borderRadius: '.5rem',
    flexDirection: 'column',
    zIndex: '2',
    boxShadow: '0 .5rem 1rem rgba(0, 0, 0, 1)',
    padding: '1rem',
  },
  popupDescription: {
    padding: '2rem',
  },
  close: {
    cursor: 'pointer',
    color: '#282c34',
    transition: 'all .5s',
    '&:hover': {
      transform: 'rotateZ(90deg)',
    },
  },
  button: {
    marginTop: '2rem',
    color: '#282c34',
    backgroundColor: 'white',
    fontWeight: '900',
    borderBottom: '1px solid #282c34',
    display: 'inline-block',
    textDecoration: 'none',
    padding: '1rem',
    fontSize: '1.4rem',
    transition: 'all .2s',
    outline: 'none !important',
    border: 'none',
    marginBottom: '1.5rem',
    transform: 'translateZ(0) scale(1.0, 1.0)',
    backfaceVisibility: 'hidden',
    '&:hover': {
      backgroundColor: cyan[900],
      color: 'white',
      boxShadow: '0 1rem 2rem rgba(0, 0, 0, .4)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      boxShadow: '0 .5rem 1rem rgba(0, 0, 0, .4)',
      transform: 'translateY(0)',
    },
  },
  buttonText: {
    color: 'inherit',
  },
  title: {
    color: cyan[900],
  },
};

function Popup({
  classes, triggerPopup, data,
}) {
  const { name, description, html_url: htmlUrl } = data || {};
  return (
    <Grid container className={classes.popup}>
      <Grid item container justify="flex-end">
        <Clear className={classes.close} onClick={triggerPopup} />
      </Grid>
      <Grid container direction="column" alignItems="center" justify="center">
        <Grid item>
          <Typography className={classes.title} variant="h3">{name}</Typography>
        </Grid>
        <Grid item>
          <Typography variant="h5" className={classes.popupDescription}>{description}</Typography>
        </Grid>
        <Grid item>
          <a
            className={classes.button}
            href={htmlUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Typography className={classes.buttonText} variant="h5">
              Go to repo →
            </Typography>
          </a>
        </Grid>
      </Grid>
    </Grid>
  );
}

Popup.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.shape({
    name: PropTypes.string,
    html_url: PropTypes.string,
    description: PropTypes.string,
  }),
  triggerPopup: PropTypes.func,
};

Popup.defaultProps = {
  data: null,
  triggerPopup: null,
};

export default injectSheet(styles)(Popup);
