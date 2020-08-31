import React from 'react';
import PropTypes from 'prop-types';
import TableCell from '@material-ui/core/TableCell';
import injectSheet from 'react-jss';

const styles = {
  tableCell: {
    color: 'white',
    fontSize: '1.6rem',
    width: '13rem',
  },
  '@media (max-width: 1024px)': {
    tableCell: {
      width: '7rem',
    },
  },
  '@media (max-width: 640px)': {
    tableCell: {
      width: '5rem',
    },
  },
};

const StyledTableCell = ({ classes, children }) => (
  <TableCell className={classes.tableCell}>{children}</TableCell>
);

StyledTableCell.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  children: PropTypes.node,
};

StyledTableCell.defaultProps = {
  children: null,
};

export default injectSheet(styles)(StyledTableCell);
