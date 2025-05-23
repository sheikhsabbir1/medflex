import React from 'react';
import { Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
  table: {
    minWidth: 650,
  },
}));

const Payment: React.FC = () => {
  const classes = useStyles();

  const invoices = [
    { id: '#12345', date: '01/01/2024', status: 'Paid', amount: '$1,000.00' },
    { id: '#12346', date: '01/02/2024', status: 'Pending', amount: '$1,000.00' },
    { id: '#12347', date: '01/03/2024', status: 'Unpaid', amount: '$1,000.00' },
  ];

  return (
    <div className={classes.root}>
      <Typography variant="h4" gutterBottom>
        Payments
      </Typography>
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Invoice</TableCell>
              <TableCell align="right">Date</TableCell>
              <TableCell align="right">Status</TableCell>
              <TableCell align="right">Amount</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {invoices.map((invoice) => (
              <TableRow key={invoice.id}>
                <TableCell component="th" scope="row">
                  {invoice.id}
                </TableCell>
                <TableCell align="right">{invoice.date}</TableCell>
                <TableCell align="right">{invoice.status}</TableCell>
                <TableCell align="right">{invoice.amount}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button variant="contained" color="primary" style={{ marginTop: '20px' }}>
        Update Payment Method
      </Button>
    </div>
  );
};

export default Payment;
