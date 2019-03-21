import React, { Component } from 'react';
import injectSheet from 'react-jss';
import Grid from '@material-ui/core/Grid';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';

import IconButton from '@material-ui/core/IconButton';
import ArrowUpward from '@material-ui/icons/ArrowUpward';
import ArrowDownward from '@material-ui/icons/ArrowDownward';

import Loader from './Loader';
import TablePagination from './TablePagination';

const styles = {
    tableCell: {
        color: 'white',
        fontSize: '1.6rem',
        width: '13rem'
    },
    arrowUp: {
        color: 'white'
    },
    arrowDown: {
        color: 'white'
    }
}

const Cell = ({classes, children}) => <TableCell className={classes.tableCell}>{children}</TableCell>
const StyledTableCell = injectSheet(styles)(Cell)

const ArrowUp = ({classes, ...props}) => <ArrowUpward className={classes.arrowUp} {...props} />
const WhiteArrowUp = injectSheet(styles)(ArrowUp)

const ArrowDown = ({classes, ...props}) => <ArrowDownward className={classes.arrowDown} {...props} />
const WhiteArrowDown = injectSheet(styles)(ArrowDown)

class DataTable extends Component {
    constructor() {
        super();
        this.state = {
            page: 0,
            rowsPerPage: 5, 
            id: 'asc',
            repoTitle: 'asc',
            owner: 'asc',
            stars: 'asc',
            creationDate: 'asc'
            /*
            headers: {
                id: {name: 'ID', sorted: 'asc'},
                repoTitle: {name: 'Repo Title', sorted: 'asc'},
                owner: {name: 'Owner', sorted: 'asc'},
                stars: {name: 'Stars', sorted: 'asc'},
                creationDate: {name: 'Created at', sorted: 'asc'}
            }
            */
        }
        this.handleChangePage = this.handleChangePage.bind(this);
        this.handleChangeRowsPerPage = this.handleChangeRowsPerPage.bind(this);
        this.handleSort = this.handleSort.bind(this);
    }

    handleChangePage(event, page) {
        this.setState({ page });
    };
    
    handleChangeRowsPerPage(event) {
        this.setState({ page: 0, rowsPerPage: +event.target.value });
    };

    handleSort(e) {
        console.log(e.target.dataset.sort);
        const columnHeader = 'desc';
        
        this.setState({
            ID: columnHeader
        })
        
        
    }
    
      render() {
        const {page, rowsPerPage} = this.state;
        const columnHeaders = ['ID', 'Repo Title', 'Owner', 'Stars', 'Created at']
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
                                {columnHeaders.map(header => (
                                    <StyledTableCell key={header}>{header}{this.state[header] === 'asc' ? <IconButton onClick={this.handleSort} data-sort={header}><WhiteArrowUp /></IconButton> : <IconButton onClick={this.handleSort}><WhiteArrowDown /></IconButton>}</StyledTableCell>
                                ))}
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

/*{Object.keys(this.state.headers).map(headerObj => <StyledTableCell key={this.state.headers[headerObj]['name']}>{this.state.headers[headerObj]['name']}{this.state.headers[headerObj]['sorted'] === 'asc' ? <IconButton onClick={this.handleSort} data-sort={headerObj}><WhiteArrowUp data-sort={headerObj} /></IconButton> : <IconButton onClick={this.handleSort}><WhiteArrowDown /></IconButton>}</StyledTableCell>)}*/