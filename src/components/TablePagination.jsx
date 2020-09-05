import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';
import Typography from '@material-ui/core/Typography';
import SelectInput from './SelectInput';

const styles = {
  iconButton: {
    color: '#ffffff',
  },
  rowsPerPage: {
    color: '#ffffff',
    paddingRight: '1rem',
  },
};

class TablePagination extends Component {
    handleFirstPageButtonClick = (event) => {
      const { onChangePage } = this.props;
      onChangePage(event, 0);
    };

    handleBackButtonClick = (event) => {
      const { onChangePage, page } = this.props;
      onChangePage(event, page - 1);
    };

    handleNextButtonClick = (event) => {
      const { onChangePage, page } = this.props;

      onChangePage(event, page + 1);
    };

    handleLastPageButtonClick = (event) => {
      const {
        onChangePage, count, rowsPerPage,
      } = this.props;

      onChangePage(
        event,
        Math.max(0, Math.ceil(count / rowsPerPage) - 1),
      );
    };

    render() {
      const {
        count, page, rowsPerPage, classes, onChangeRowsPerPage,
      } = this.props;
      return (
        <Grid container style={{ alignItems: 'center', justifyContent: 'flex-end' }}>
          <Grid item>
            <Typography className={classes.rowsPerPage} variant="h6">Rows per page:</Typography>
          </Grid>
          <Grid item>
            <SelectInput onChangeRowsPerPage={onChangeRowsPerPage} rowsPerPage={rowsPerPage} />
          </Grid>
          <Grid item>
            <IconButton
              className={classes.iconButton}
              onClick={this.handleFirstPageButtonClick}
              disabled={page === 0}
              aria-label="First Page"
            >
              <FirstPageIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.iconButton}
              onClick={this.handleBackButtonClick}
              disabled={page === 0}
              aria-label="Previous Page"
            >
              <KeyboardArrowLeft />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.iconButton}
              onClick={this.handleNextButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="Next Page"
            >
              <KeyboardArrowRight />
            </IconButton>
          </Grid>
          <Grid item>
            <IconButton
              className={classes.iconButton}
              onClick={this.handleLastPageButtonClick}
              disabled={page >= Math.ceil(count / rowsPerPage) - 1}
              aria-label="Last Page"
            >
              <LastPageIcon />
            </IconButton>
          </Grid>
        </Grid>
      );
    }
}

TablePagination.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  page: PropTypes.number,
  count: PropTypes.number,
  rowsPerPage: PropTypes.number,
  onChangePage: PropTypes.func,
  onChangeRowsPerPage: PropTypes.func,
};

TablePagination.defaultProps = {
  page: 0,
  count: 30,
  rowsPerPage: 5,
  onChangePage: null,
  onChangeRowsPerPage: null,
};

export default injectSheet(styles)(TablePagination);
