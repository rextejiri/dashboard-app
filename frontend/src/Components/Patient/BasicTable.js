import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';



const useStyles = makeStyles({
  table: {
    minWidth: 642,
    minHeight: 600,
    backgroundColor: "#1A1818",
    color: "E5E5E5",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}



export default function BasicTable(props) {
  const patient = props.patient
  const rows = [
    createData(patient.testType1, patient.result1, patient.flag1, patient.unit1,),
      createData(patient.testType2, patient.result2, patient.flag2, patient.unit2,),
      createData(patient.testType3, patient.result3, patient.flag3, patient.unit3,),
      createData(patient.testType4, patient.result4, patient.flag4, patient.unit4,),
  ];
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="center" style={{color: "#E5E5E5"}}>Test Name</TableCell>
            <TableCell style={{color: "#E5E5E5"}} align="center">Result</TableCell>
            <TableCell style={{color: "#E5E5E5"}} align="center">Flag</TableCell>
            <TableCell style={{color: "#E5E5E5"}} align="center">Unit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody style={{color: "#E5E5E5"}}>
          {rows.map((row) => (
            <TableRow style={{color: "#E5E5E5"}} key={row.name}>
              <TableCell align="center" style={{color: "#E5E5E5"}} component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell style={{color: "#E5E5E5"}} align="center">{row.calories}</TableCell>
              <TableCell style={{color: "#E5E5E5"}} align="center">{row.fat}</TableCell>
              <TableCell style={{color: "#E5E5E5"}} align="center">{row.carbs}</TableCell>

            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
