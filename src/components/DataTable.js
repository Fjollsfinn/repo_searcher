import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableFooter from '@material-ui/core/TableFooter';
import injectSheet from 'react-jss';
import Loader from './Loader';
import Grid from '@material-ui/core/Grid';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

import '../css/mainPage.css';

const styles = {
    tableCell: {
        color: 'white',
        fontSize: '1.6rem',
        width: '10rem'
    },
    tablePagination: {
        color: 'white',
        fontSize: '1.3rem'
    }
}

const Cell = ({classes, children}) => <TableCell className={classes.tableCell}>{children}</TableCell>
const StyledTableCell = injectSheet(styles)(Cell)

const Pagination = ({classes, ...props}) => <TablePagination className={classes.tablePagination} {...props}/>
const StyledPagination = injectSheet(styles)(Pagination)

class TablePaginationActions extends React.Component {
    handleFirstPageButtonClick = event => {
      this.props.onChangePage(event, 0);
    };
  
    handleBackButtonClick = event => {
      this.props.onChangePage(event, this.props.page - 1);
    };
  
    handleNextButtonClick = event => {
      this.props.onChangePage(event, this.props.page + 1);
    };
  
    handleLastPageButtonClick = event => {
      this.props.onChangePage(
        event,
        Math.max(0, Math.ceil(this.props.count / this.props.rowsPerPage) - 1),
      );
    };
  
    render() {
      const { count, page, rowsPerPage } = this.props;
  
      return (
        <Grid container style={{width: '35rem'}}>
          <Grid item><IconButton
            onClick={this.handleFirstPageButtonClick}
            disabled={page === 0}
            aria-label="First Page"
          >
            <FirstPageIcon style={{color: 'white'}} />
          </IconButton></Grid>
          <Grid item><IconButton
            onClick={this.handleBackButtonClick}
            disabled={page === 0}
            aria-label="Previous Page"
          >
            <KeyboardArrowLeft style={{color: 'white'}} />
          </IconButton></Grid>
          <Grid item><IconButton
            onClick={this.handleNextButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Next Page"
          >
            <KeyboardArrowRight style={{color: 'white'}} />
          </IconButton></Grid>
          <Grid item><IconButton
            onClick={this.handleLastPageButtonClick}
            disabled={page >= Math.ceil(count / rowsPerPage) - 1}
            aria-label="Last Page"
          >
            <LastPageIcon style={{color: 'white'}} />
          </IconButton></Grid>
        </Grid>
      );
    }
  }

class DataTable extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            rowsPerPage: 5, 
        }
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
    }

    handleChangePage(event, page) {
        this.setState({ page });
      };
    
    handleChangeRowsPerPage(event) {
        this.setState({ page: 0, rowsPerPage: event.target.value });
      };
    
      render() {
        const {page, rowsPerPage} = this.state;
        const data = this.props.data.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map(item => (
            <TableRow key={item.id}>
                <StyledTableCell>{item.id}</StyledTableCell>
                <StyledTableCell>{item.name}</StyledTableCell>
                <StyledTableCell>{item.owner.login}</StyledTableCell>
                <StyledTableCell>{item.stargazers_count}</StyledTableCell>
                <StyledTableCell>{item.created_at.slice(0,10)}</StyledTableCell>
            </TableRow>
        )
        )

        return (
            <Grid container direction="column" alignItems="center">
                <Table>
                    <TableHead>
                        <TableRow>
                            <StyledTableCell>ID</StyledTableCell>
                            <StyledTableCell>Repo Title</StyledTableCell>
                            <StyledTableCell>Owner</StyledTableCell>
                            <StyledTableCell>Stars</StyledTableCell>
                            <StyledTableCell>Created at</StyledTableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            { this.props.isLoading ? 
                <Grid item style={{marginTop: '2rem'}}><Loader/></Grid> : 
                <Table>
                    <TableBody>
                        {data}
                    </TableBody>
                    <TableFooter>
                        <TableRow>
                            <StyledPagination
                            rowsPerPageOptions={[5, 10, 30]}
                            count={30}
                            rowsPerPage={this.state.rowsPerPage}
                            page={this.state.page}
                            SelectProps={{
                                native: true,
                            }}
                            onChangePage={this.handleChangePage}
                            onChangeRowsPerPage={this.handleChangeRowsPerPage}
                            ActionsComponent={TablePaginationActions}
                            />
                        </TableRow>
                    </TableFooter>
                </Table>
            }
            </Grid>
        )
    
    }
}

export default DataTable;