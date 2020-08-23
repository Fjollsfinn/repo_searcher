import React from 'react';
import PropTypes from 'prop-types';

function SelectInput({ onChangeRowsPerPage, rowsPerPage, options, ...props }) {
    return (
    <select type="select" onChange={onChangeRowsPerPage} value={rowsPerPage} {...props} >
        {options && options.map(option => (
            <option key={`select-input-option-${option}`} value={option}>{option}</option>
        ))}
    </select>
    )
}

SelectInput.propTypes = {
    onChangeRowsPerPage: PropTypes.func.isRequired,
    rowsPerPage: PropTypes.number,
    options: PropTypes.arrayOf(PropTypes.number),
}

SelectInput.defaultProps = {
    rowsPerPage: 5,
    options: [5, 10, 15],
}

export default SelectInput;