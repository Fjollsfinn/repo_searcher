import React from 'react';
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

const inputComponent = ({ classes, ...props }) => (
  <input type="text" className={classes.input} placeholder="Enter repozitory name . . ." name="searchInput" {...props} />
);

const StyledInputComponent = injectSheet(styles)(inputComponent);

function TextInput(props) {
    return (
      <StyledInputComponent onChange={props.handleChangeInput} value={props.value} />
    );
}

export default TextInput;
