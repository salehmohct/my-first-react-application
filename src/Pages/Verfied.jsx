import * as React from "react";
import "../Styling/Login.css";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { CustomizedCard } from "../Global/Style";
import { CustomizedButton } from "../Global/Style";
import Title from "../Component/Title";
import { Link } from "react-router-dom";
import { Paths } from "../Router";
const Verfied = () => (
  <>
    <CustomizedCard className="CustomeCard2">
      <Title Title="Verified" />
      <CheckCircleIcon className="CheckCircle" />
      <Link to={Paths.Dashboard}>
        <CustomizedButton>Next</CustomizedButton>
      </Link>
    </CustomizedCard>
  </>
);

export default Verfied;
