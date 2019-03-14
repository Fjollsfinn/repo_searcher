import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import injectSheet from 'react-jss';

const styles = {
    tableCell: {
        marginTop: '2rem',
        color: 'white',
        fontSize: '1.6rem'
    }
}

const Cell = ({classes, children}) => (
    <TableCell className={classes.tableCell}>{children}</TableCell>
)

const StyledTableCell = injectSheet(styles)(Cell)

function DataTable (props) {
    return (
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
            { props.isLoading ? console.log("a") : console.log("b")}
        </Table>
    )
}


export default DataTable;