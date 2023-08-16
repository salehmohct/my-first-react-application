import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import "../Styling/MyReport.css";
import { CustomizedButton } from "../Global/Style";
function createData(name, calories, fat, carbs, protein, report) {
  return { name, calories, fat, carbs, protein, report };
}
const rows = [
  createData(
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum"
  ),
  createData(
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum"
  ),
  createData(
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum"
  ),
  createData(
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum"
  ),
  createData(
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum",
    "lorem ipsum"
  ),
];

export default function MyReport() {
  return (
    <>
      <div className="button-container">
        <CustomizedButton>Back</CustomizedButton>
      </div>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650, border: 1 }} aria-label="simple table">
          <TableHead>
            <TableRow className="HeadRow">
              <TableCell sx={{ border: 1 }}>Report 1</TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                Report 2
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                Report 3
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                Report 4
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                Report 5
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                Report 6
              </TableCell>
              <TableCell sx={{ border: 1 }} align="left">
                Actions
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow className="BodyRow" key={row.name}>
                <TableCell sx={{ border: 1 }} component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell sx={{ border: 1 }} align="center">
                  {row.calories}
                </TableCell>
                <TableCell sx={{ border: 1 }} align="center">
                  {row.fat}
                </TableCell>
                <TableCell sx={{ border: 1 }} align="center">
                  {row.carbs}
                </TableCell>
                <TableCell sx={{ border: 1 }} align="center">
                  {row.protein}
                </TableCell>
                <TableCell sx={{ border: 1 }} align="center">
                  {row.protein}
                </TableCell>
                <TableCell
                  className="IconCell"
                  sx={{ border: 1 }}
                  align="center"
                >
                  <DeleteIcon className="Delete" />
                  <EditIcon className="Edit" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
