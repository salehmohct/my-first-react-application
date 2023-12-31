import * as React from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Container } from "@mui/material";
import Chart from "../Component/Chart";

import "../Styling/Dashboard.css";
export default function Environement() {
  return (
    <Container sx={{ flexGrow: 1 }}>
      <Grid container spacing={3}>
        <Grid xs={12} lg={6}>
          <Chart No="1" path={require("../Images/stats1.png")} />
        </Grid>
        <Grid xs={12} lg={6}>
          <Chart No="2" path={require("../Images/stats2.jpg")} />
        </Grid>
        <Grid xs={12} lg={6}>
          <Chart No="3" path={require("../Images/stats3.png")} />
        </Grid>
        <Grid xs={12}></Grid>
      </Grid>
    </Container>
  );
}
