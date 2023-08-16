import * as React from "react";
import "../Styling/Login.css";
import Input from "../Component/Input";
import Description from "../Component/Description";
import { CustomizedCard } from "../Global/Style";
import { CustomizedButton } from "../Global/Style";
import Title from "../Component/Title";

const ForgetPassword = () => (
  <>
    <CustomizedCard className="ForgetPassword CustomeCard">
      <Title Title="FORGOT PASSWORD" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          type="Email"
          CustomeClass="EmailClass"
          forInput="Email"
          Label="Email Id"
          placeholder="Enter email ID"
        />
        <CustomizedButton>Submit</CustomizedButton>
      </form>
    </CustomizedCard>
    <div className="forgetPasswordDesc">
      <Description Desc="Admin can recover their account by their registered email id."></Description>
    </div>
  </>
);

export default ForgetPassword;
