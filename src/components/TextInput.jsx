import React from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';

const styles = {
  input: {
    borderRadius: '.5rem',
    height: '3rem',
    width: '25rem',
    paddingLeft: '1rem',
    border: '.3rem white solid',
    backgroundColor: '#282c34',
    color: 'white',
  },
};

function TextInput({ classes, value, onChangeInput }) {
  return (
    <input
      type="text"
      className={classes.input}
      placeholder="Enter repository name . . ."
      name="searchInput"
      value={value}
      onChange={onChangeInput}
    />
  );
}

TextInput.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  onChangeInput: PropTypes.func.isRequired,
  value: PropTypes.string,
};

TextInput.defaultProps = {
  value: '',
};

export default injectSheet(styles)(TextInput);
