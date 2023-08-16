import * as React from "react";
import "../Styling/Login.css";
import CircleIcon from "@mui/icons-material/Circle";
import { CustomizedCard } from "../Global/Style";
import { CustomizedButton } from "../Global/Style";
import Title from "../Component/Title";
import { Link } from "react-router-dom";
import { Paths } from "../Router";
const Verfication = () => (
  <>
    <CustomizedCard className="CustomeCard">
      <Title Title="Verification" />
      <div className="text">
        <CircleIcon />
        <p>
          {" "}
          You are sing up with this account please verify by this link{" "}
          <span>www.loremipsum.com</span>
        </p>
      </div>
      <Link to={Paths.Verfied}>
        <CustomizedButton>Submit</CustomizedButton>
      </Link>
    </CustomizedCard>
  </>
);

export default Verfication;
