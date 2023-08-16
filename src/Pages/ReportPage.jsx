import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Description from "../Component/Description";
import { CustomizedCard } from "../Global/Style";
import { CustomizedButton } from "../Global/Style";
import "../Styling/ReprotPage.css";
import Swal from "sweetalert2";

const ReprotPage = () => {
  const OpenSweetAlert = async () => {
    const { value: formValues } = await Swal.fire({
      title: "Customize report",
      confirmButtonText: "Continue for next step",

      customClass: {
        confirmButton: "confirm-button-class",
        title: "title-class",
      },
      html: `<div class="input-conainer">
        <label for="swal-input1" >From</label>
        <input id="swal-input1" placeHolder="YYYY/MM/DD"  class="swal2-input">
        <label for="swal-input2" >To</label>
        <input id="swal-input2" placeHolder="YYYY/MM/DD"  class="swal2-input">
        </div>`,

      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value,
        ];
      },
    });
    if (formValues) {
      Swal.fire(JSON.stringify(formValues));
    }
  };

  return (
    <div className="ReportPage">
      <div className="button-container">
        <CustomizedButton onClick={OpenSweetAlert}>
          Create Report
        </CustomizedButton>
      </div>
      <Container className="input-container" sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={4} lg={3}>
            <CustomizedCard className="Card">
              <div className="box"></div>
              <h5>SEBI report</h5>
            </CustomizedCard>
          </Grid>
          <Grid xs={12} md={4} lg={3}>
            <CustomizedCard className="Card">
              <div className="box"></div>
              <h5>GRI report</h5>
            </CustomizedCard>
          </Grid>
          <Grid xs={12} md={4} lg={3}>
            <CustomizedCard className="Card">
              <div className="box"></div>
              <h5>Customize report</h5>
            </CustomizedCard>
          </Grid>
        </Grid>
        <div className="DescriptionContainer">
          <Description
            Desc="-
          Report - In this option, admin can upload the data and input data. There will be two types of reports SEBI and GRI and customized report."
          />
          <Description
            Desc="- Create Report - Admin can create report in three frameworks.
	        SEBI - Admin can select financial year through a popup. He can generate create or download reports there."
          />
          <Description Desc="- GRI -Admin can select financial year through a popup. Admin will select quarters and months from the dropdown. He can generate create or download reports there" />
          <Description
            Desc="- Customize Report - Admin can manage customize data points. Admin can also download reports.
            My report - Admin will get a list of created reports."
          />
        </div>
      </Container>
    </div>
  );
};
export default ReprotPage;
