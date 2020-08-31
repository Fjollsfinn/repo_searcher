import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  overlay: {
    zIndex: 1,
    top: 0,
    left: 0,
    position: 'fixed',
    backgroundColor: 'rgba(0, 0, 0, .55)',
    width: '100%',
    height: '100%',
  },
};

function Overlay({ classes, triggerPopup }) {
  return (
    <div role="presentation" className={classes.overlay} onClick={triggerPopup} />
  );
}

Overlay.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  triggerPopup: PropTypes.func,
};

Overlay.defaultProps = {
  triggerPopup: null,
};

export default injectSheet(styles)(Overlay);
