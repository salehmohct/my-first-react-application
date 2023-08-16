import BasicButtons from "../Component/Button";
import React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Input from "../Component/Input";
import Description from "../Component/Description";
import "../Styling/ProfileDetail.css";
import { CustomizedButton } from "../Global/Style";
const ProfileDetails = () => (
  <div className="ProfilePage">
    <div className="button-container">
      <BasicButtons name="View Details" />
    </div>
    <Container className="input-container" sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="text"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter name"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="test 1"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter test 1"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="test 2"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter test 2"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="text"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter name"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="text"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter name"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="test 1"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter test 1"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="test 2"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter test 2"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="text"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter name"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="text"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter name"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="test 1"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter test 1"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="test 2"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter test 2"
          />
        </Grid>
        <Grid xs={12} md={4} lg={3}>
          <Input
            type="text"
            CustomeClass="EmailClass"
            forInput="Name"
            id="Name"
            Label="Name"
            placeholder="Enter name"
          />
        </Grid>
      </Grid>
      <div className="footerContainer">
        <CustomizedButton className="button">submit</CustomizedButton>
        <Description Desc="Admin can edit profile detail name, password, logout." />
      </div>
    </Container>
  </div>
);

export default ProfileDetails;
