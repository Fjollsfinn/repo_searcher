import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import injectSheet from 'react-jss';
import Loader from './Loader';
import Grid from '@material-ui/core/Grid';

const styles = {
    tableCell: {
        color: 'white',
        fontSize: '1.6rem'
    }
}

const Cell = ({classes, children}) => (
    <TableCell className={classes.tableCell}>{children}</TableCell>
)

const StyledTableCell = injectSheet(styles)(Cell)

function DataTable (props) {

    const data = props.data.slice(0,5).map(item => (
        <TableRow key={item.id}>
            <StyledTableCell>{item.id}</StyledTableCell>
            <StyledTableCell>{item.name}</StyledTableCell>
            <StyledTableCell>{item.owner.login}</StyledTableCell>
            <StyledTableCell>{item.stargazers_count}</StyledTableCell>
            <StyledTableCell>{item.created_at}</StyledTableCell>
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
        { props.isLoading ? 
            <Grid item style={{marginTop: '2rem'}}><Loader/></Grid> : 
            <Table>
                <TableBody>
                    {data}
                </TableBody>
            </Table>
        }
        </Grid>
    )
}


export default DataTable;