import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
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

      </Container>
    </div>
  );
};
export default ReprotPage;
