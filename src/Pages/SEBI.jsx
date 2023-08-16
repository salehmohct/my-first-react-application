import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Description from "../Component/Description";
import BasicAccordion from "../Component/SimpleAccordion";
import { CustomizedButton } from "../Global/Style";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { CusomizedTable } from "../Global/Style";
import "../Styling/Sepi.css";
function createData(name, calories) {
  return { name, calories };
}

const rows = [
  createData(1, "Corporate Identity Number (CIN) of the Company"),
  createData(2, "Name of the comapny"),
  createData(3, "Year of incorporation"),
  createData(4, "Registered office address	"),
  createData(5, "Corporate address"),
  createData(6, "Email"),
  createData(7, "Telephone"),
  createData(8, "Website"),
  createData(9, "Financial year for reporting is being done"),
  createData(10, "	Whether shares listed on recognized Stock Exchange(s):"),
  createData(11, "Authorised Capital	"),
  createData(12, "Paid Up Capital"),
];
const Sebi = () => (
  <>
    <Container sx={{ flexGrow: 1 }}>
      <div className="button-container">
        <CustomizedButton>Back</CustomizedButton>
      </div>
      <Grid container spacing={3}>
        <Grid xs={12} lg={6}>
          <BasicAccordion
            extended="true"
            title="Section A"
            item={[
              "Company Details",
              "Products/Services",
              "Operations",
              "Employees",
              "Holding, Subsidiary and Associate ...",
              "CSR File",
              "Transparency and Disclosures ...",
            ]}
          />
          <BasicAccordion title="Section B" item={[]} />
          <BasicAccordion title="Section C" item={[]} />
        </Grid>
        <Grid xs={12} lg={6}>
          <TableContainer component={Paper}>
            <CusomizedTable aria-label="simple table">
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    className="row1"
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 1 } }}
                  >
                    <TableCell
                      sx={{ border: 1 }}
                      className="cell1"
                      component="th"
                      scope="row"
                    >
                      {row.name}
                    </TableCell>
                    <TableCell
                      sx={{ border: 1 }}
                      className="cell2"
                      align="left"
                    >
                      {row.calories}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </CusomizedTable>
          </TableContainer>
        </Grid>
      </Grid>

    </Container>
  </>
);

export default Sebi;
