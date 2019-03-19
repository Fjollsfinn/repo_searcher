import React from 'react';
import injectSheet from 'react-jss';

const styles = {
    select: {
    },
    option: {
        
    }
}

const SelectComponent = ({classes, ...props}) => (
    <select type="select" className={classes.input} {...props} >
        <option value={5}>5</option>
        <option value={10}>10</option>
        <option value={15}>15</option>
    </select>

)

const StyledSelectComponent = injectSheet(styles)(SelectComponent);

function SelectInput({ onChangeRowsPerPage, rowsPerPage }) {
    return (
        <StyledSelectComponent onChange={onChangeRowsPerPage} value={rowsPerPage}/>
    )
}

export default SelectInput;