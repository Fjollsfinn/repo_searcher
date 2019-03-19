import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import Loader from './Loader';
import TablePagination from './TablePagination';

const styles = {
    tableCell: {
        color: 'white',
        fontSize: '1.6rem',
        width: '12rem'
    }
}

const Cell = ({classes, children}) => <TableCell className={classes.tableCell}>{children}</TableCell>
const StyledTableCell = injectSheet(styles)(Cell)

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
        this.setState({ page: 0, rowsPerPage: +event.target.value });
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
            <div>
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
                    </Table>
                }
                </Grid>
                <TablePagination onChangePage={this.handleChangePage} onChangeRowsPerPage={this.handleChangeRowsPerPage} rowsPerPage={this.state.rowsPerPage}
                page={this.state.page} count={30}/>
            </div>
        )
    
    }
}

export default DataTable;