import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Axios from "axios";
import { BsConeStriped } from 'react-icons/bs';

const useStyles = makeStyles({
    table: {
        minWidth: 950,
    },
});

function createData(payrollID, empID, paidDate, standard, deduction, benefit, total) {
    return { payrollID, empID, paidDate, standard, deduction, benefit, total };
}

const rows = [
];

const getPayroll = () => {
    Axios.post("http://localhost:3001/payroll", {
        rows: rows,
    }).then((response) => {
        let myData = response.data;
        for (let i = 0; i < myData.length; i++) {
            rows.push(
                createData(myData[i].payroll_id,
                        myData[i].employee_id,
                        myData[i].paid_date,
                        myData[i].standard_salary,
                        myData[i].deduction,
                        myData[i].benefit,
                        myData[i].total)
                );
        }
    })
};

//need to call everytime we refresh the page.

getPayroll();

export default function BasicTable() {

    
    const classes = useStyles();

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table}>
                <TableHead>
                <TableRow>
                    <TableCell align="center">Payroll ID</TableCell>
                    <TableCell align="center">Employee ID</TableCell>
                    <TableCell align="center">Paid Date</TableCell>
                    <TableCell align="center">Standard Salary</TableCell>
                    <TableCell align="center">Deduction</TableCell>
                    <TableCell align="center">Benefit</TableCell>
                    <TableCell align="center">Total Salaray</TableCell>
                </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow>
                        <TableCell align="center">{row.payrollID}</TableCell>
                        <TableCell align="center">{row.empID}</TableCell>
                        <TableCell align="center">{row.paidDate}</TableCell>
                        <TableCell align="center">$ {row.standard}</TableCell>
                        <TableCell align="center">{row.deduction}</TableCell>
                        <TableCell align="center">{row.benefit}</TableCell>
                        <TableCell align="center">$ {row.total}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}

