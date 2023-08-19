import * as React from "react";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import "../Styling/ComapnyDetails.css";
import { CusomizedTable } from "../Global/Style";
import BasicButtons from "../Component/Button";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Lorem1"),
  createData("Lorem2"),
  createData("Lorem3"),
  createData("Lorem4"),
  createData("Lorem5"),
  createData("Lorem6"),
  createData("Lorem7"),
  createData("Lorem8"),
];

const CompanyDetails = () => (
  <>
    <div className="button-container">
      <BasicButtons name="Edit Company Details " />
    </div>
    <TableContainer component={Paper}>
      <CusomizedTable
        sx={{
          minWidth: 650,
        }}
        aria-label="simple table"
      >
        <TableHead>
          <TableRow>
            <TableCell sx={{ fontWeight: 700 }}>Name</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </CusomizedTable>
    </TableContainer>
  </>
);

export default CompanyDetails;
