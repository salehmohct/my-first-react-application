import React from "react";
import { CusomizedImage } from "../Global/Style";
import "../Styling/Login.css";
const Logo = () => (
  <div className="logoConainer">
    <CusomizedImage
      src={require("../Images/DashBoard_Logo.png")}
      alt="logo Image"
    />
  </div>
);

export default Logo;
