import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Input from "../Component/Input";
import { CustomizedButton } from "../Global/Style";
import Description from "../Component/Description";
import BasicAccordion from "../Component/SimpleAccordion";
import "../Styling/DataUpload.css";
const DataUpload = () => (
  <>
    <div className="button-container">
      <CustomizedButton>Manual data tab</CustomizedButton>
      <CustomizedButton>Bulk upload tab</CustomizedButton>
    </div>
    <Container sx={{ flexGrow: 1 }}>
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
          <BasicAccordion extended="false" title="Section B" item={[]} />
          <BasicAccordion extended="false" title="Section C" item={[]} />
        </Grid>
        <Grid container2 xs={12} lg={6}>
          <Grid className="grid1" md={6} lg={6} container item>
            <Input
              CustomeClass="reprot"
              Label="Report 1"
              placeholder="Enter Report 1"
              forInput="Report 1"
            />
            <Input
              CustomeClass="reprot"
              Label="Report 2"
              placeholder="Enter Report 2"
              forInput="Report 2"
            />
            <Input
              CustomeClass="reprot"
              Label="Report 3"
              placeholder="Enter Report 3"
              forInput="Report 3"
            />
            <Input
              CustomeClass="reprot"
              Label="Report 4"
              placeholder="Enter Report 4"
              forInput="Report 4"
            />
          </Grid>
          <Grid md={6} lg={6} container item>
            <Input
              CustomeClass="reprot"
              Label="Report 5"
              placeholder="Enter Report 5"
              forInput="Report 5"
            />
            <Input
              CustomeClass="reprot"
              Label="Report 6"
              placeholder="Enter Report 6"
              forInput="Report 6"
            />
            <Input
              CustomeClass="reprot"
              Label="Report 7"
              placeholder="Enter Report 7"
              forInput="Report 7"
            />
            <Input
              CustomeClass="reprot"
              Label="Report 8"
              placeholder="Enter Report 8"
              forInput="Report 8"
            />
          </Grid>
          <div className="Descriotion-container">
            <Description Desc="- Data Upload - Admin can upload data manually or in a CSV file." />
            <Description Desc="- Location - Admin can select a location from the dropdown." />
            <Description Desc="- Upload data - Admin can upload data manually or in a CSV file. Admin can also bulk upload data." />
          </div>
        </Grid>
      </Grid>
    </Container>
  </>
);

export default DataUpload;
