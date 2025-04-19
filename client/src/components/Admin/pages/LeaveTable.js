/*import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "axios";

const useStyles = makeStyles({
    table: {
        minWidth: 950,
    },
});

function createData(leaveID, leaveType, empID, leaveDate, returnDate, totalDays) {
    return { leaveID, leaveType, empID, leaveDate, returnDate, totalDays };
}

const rows = [
];

const getLeave = () => {
    Axios.post("http://localhost:3001/leave", {
        rows: rows,
    }).then((response) => {
        let myData = response.data;
        for (let i = 0; i < myData.length; i++) {
            rows.push(
                createData(myData[i].leave_id,
                        myData[i].leave_type,
                        myData[i].employee_id,
                        myData[i].leave_date,
                        myData[i].return_date,
                        myData[i].total_days)
                );
        }
    })
};

getLeave();

export default function LeaveTable() {

    
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell align="center">Leave ID</TableCell>
                    <TableCell align="center">Leave Type</TableCell>
                    <TableCell align="center">Employee ID</TableCell>
                    <TableCell align="center">Leave Date</TableCell>
                    <TableCell align="center">Return Date</TableCell>
                    <TableCell align="center">Total Days</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow>
                        <TableCell align="center">{row.payrollID}</TableCell>
                        <TableCell align="center">{row.leaveType}</TableCell>
                        <TableCell align="center">{row.empID}</TableCell>
                        <TableCell align="center">{row.leaveDate}</TableCell>
                        <TableCell align="center">$ {row.returnDate}</TableCell>
                        <TableCell align="center">$ {row.totalDays}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}*/