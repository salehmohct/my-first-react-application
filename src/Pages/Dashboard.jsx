import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Chart from "../Component/Chart";
import Description from "../Component/Description";
import "../Styling/Dashboard.css";
export default function AutoGrid() {
  return (
    <>
      <Container className="DashboardContainer" sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid xs={12} md={6} lg={6}>
            <Chart No="1" path={require("../Images/stats1.png")} />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <Chart No="2" path={require("../Images/stats2.jpg")} />
          </Grid>
          <Grid xs={12} md={6} lg={6}>
            <Chart No="3" path={require("../Images/stats3.png")} />
          </Grid>
        </Grid>
        <div className="Descriotion-container">
          <Description Desc="- In this dashboard screen, admin will get ESG data, Profile, Navigation bar, Reports, Notification, and Analytics.Dashboard " />
          <Description Desc="- Admin will get analytics reports, profile details, and logout option" />
        </div>
      </Container>
    </>
  );
}
