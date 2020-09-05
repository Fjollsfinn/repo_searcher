import React, { Component } from 'react';
import PropTypes from 'prop-types';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import IconButton from '@material-ui/core/IconButton';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';
import CircularProgress from '@material-ui/core/CircularProgress';
import { Typography } from '@material-ui/core';
import PageviewIcon from '@material-ui/icons/Pageview';
import clsx from 'clsx';
import TableCell from './TableCell';
import TablePagination from './TablePagination';

const styles = {
  sortArrow: {
    color: '#ffffff',
    zIndex: -1,
  },
  activeRow: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: '#434956',
    },
  },
  loaderWrapper: {
    marginTop: '2rem',
  },
  noDataInfoWrapper: {
    padding: '2rem',
  },
  white: {
    color: '#ffffff',
  },
  noItemsIcon: {
    fontSize: 64,
  },
};

const columnHeaders = [{ title: 'ID', name: 'id' }, { title: 'Repo Title', name: 'name' }, { title: 'Owner', name: 'owner' }, { title: 'Stars', name: 'stargazers_count' }, { title: 'Created at', name: 'created_at' }];

class DataTable extends Component {
  constructor() {
    super();
    this.state = {
      page: 0,
      rowsPerPage: 5,
    };
    this.handleChangePage = this.handleChangePage.bind(this);
    this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
  }

  handleChangePage(event, page) {
    this.setState({ page });
  }

  handleChangeRowsPerPage(event) {
    this.setState({ page: 0, rowsPerPage: +event.target.value });
  }

  render() {
    const { page, rowsPerPage } = this.state;
    const {
      classes, triggerPopup, handleSort, isLoading, panelState, data,
    } = this.props;
    const tableData = data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
      .map((item, index) => (
        <TableRow
          key={`item-${item.id}`}
          className={classes.activeRow}
          data-index={page === 0 ? index : page * rowsPerPage + index}
          onClick={triggerPopup}
        >
          <TableCell>{item.id}</TableCell>
          <TableCell>{item.name}</TableCell>
          <TableCell>{item.owner.login}</TableCell>
          <TableCell>{item.stargazers_count}</TableCell>
          <TableCell>{item.created_at.slice(0, 10)}</TableCell>
        </TableRow>
      ));

    return (
      <div>
        <Grid container direction="column" alignItems="center">
          <Table>
            <TableHead>
              <TableRow>
                {columnHeaders.map((header) => (
                  <TableCell key={header.name}>
                    {header.title}
                    <IconButton onClick={handleSort} data-sort={header.name}>
                      {panelState[header.name] === 'asc'
                        ? <ArrowUpward className={classes.sortArrow} />
                        : <ArrowDownward className={classes.sortArrow} />}
                    </IconButton>
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
          </Table>
          { isLoading
            ? (
              <Grid
                item
                className={classes.loaderWrapper}
              >
                <CircularProgress className={classes.white} />
              </Grid>
            )
            : (
              <Table>
                <TableBody>
                  {data && data.length ? tableData : (
                    <Grid className={classes.noDataInfoWrapper} container direction="column" alignItems="center">
                      <PageviewIcon className={clsx(classes.white, classes.noItemsIcon)} />
                      <Typography className={classes.white} variant="h4">No repository found.</Typography>
                    </Grid>
                  )}
                </TableBody>
              </Table>
            )}
        </Grid>
        <TablePagination
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
          rowsPerPage={rowsPerPage}
          page={page}
          count={30}
        />
      </div>
    );
  }
}

DataTable.propTypes = {
  classes: PropTypes.objectOf(PropTypes.string).isRequired,
  data: PropTypes.arrayOf(PropTypes.object),
  handleSort: PropTypes.func,
  isLoading: PropTypes.bool,
  panelState: PropTypes.shape({}),
  triggerPopup: PropTypes.func,
};

DataTable.defaultProps = {
  data: null,
  handleSort: null,
  isLoading: null,
  panelState: null,
  triggerPopup: null,
};

export default injectSheet(styles)(DataTable);
