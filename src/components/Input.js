import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    input: {
        borderRadius: '.5rem',
        height: '3rem',
        width: '25rem',
        paddingLeft: '1rem',
        border: '.3rem blueviolet solid',
        backgroundColor: '#282c34',
        color: 'blueviolet'
    }
}

const input = ({classes, ...props}) => (
    <input type="text" className={classes.input} type="text" placeholder="Enter repozitory name . . ." name="searchInput" {...props}/>
)

const StyledInput = injectSheet(styles)(input);

function Input(props) {
    return (
        <StyledInput onChange={props.handleChangeInput} value={props.value}/>
    )
}

export default Input;