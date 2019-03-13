import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';

function DataTable (props) {
    return (
        <Table>
            <TableHead>
                <TableRow>
                    <TableCell>ID</TableCell>
                    <TableCell>Repo Title</TableCell>
                    <TableCell>Owner</TableCell>
                    <TableCell>Stars</TableCell>
                    <TableCell>Created at</TableCell>
                </TableRow>
            </TableHead>
        </Table>
    )
}

export default DataTable;