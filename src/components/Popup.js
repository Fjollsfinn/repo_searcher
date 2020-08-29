import React from 'react';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import Clear from '@material-ui/icons/Clear';

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
      backgroundColor: '#282c34',
      color: 'white',
      boxShadow: '0 1rem 2rem rgba(0, 0, 0, .4)',
      transform: 'translateY(-2px)',
    },
    '&:active': {
      boxShadow: '0 .5rem 1rem rgba(0, 0, 0, .4)',
      transform: 'translateY(0)',
    },
  },
};

const Button = ({ classes, children, ...props }) => (
  <a className={classes.button} href={props.data[props.selectedItem].html_url} target="_blank">{children}</a>
);
const StyledButton = injectSheet(styles)(Button);

const PopupComponent = ({ classes, ...props }) => (
  <Grid container className={classes.popup}>
    <Grid item style={{ marginLeft: 'auto' }}>
      <Clear style={{ cursor: 'pointer', color: '#282c34' }} onClick={props.triggerPopup} />
    </Grid>
    <Grid container direction="column" alignItems="center" justify="center">
      <Grid item>
        <p style={{ color: '#282c34', fontSize: '2rem', fontWeight: 700 }}>{props.data[props.selectedItem].name}</p>
      </Grid>
      <Grid item>
        <p style={{ color: '#282c34', fontSize: '1.5rem' }}>{props.data[props.selectedItem].description}</p>
      </Grid>
      <Grid item>
        <StyledButton {...props}>Go to repo →</StyledButton>
      </Grid>
    </Grid>
  </Grid>
);
const StyledPopupComponent = injectSheet(styles)(PopupComponent);

function Popup(props) {
  return (
    <StyledPopupComponent triggerPopup={props.triggerPopup} data={props.data} selectedItem={props.selectedItem} />
  );
}

export default Popup;
