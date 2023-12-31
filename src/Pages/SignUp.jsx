import * as React from "react";
import "../Styling/Login.css";
import Input from "../Component/Input";
import BasicButtons from "../Component/Button";

import { CustomizedCard } from "../Global/Style";
import { Link } from "react-router-dom";
import { Paths } from "../Router";
import Title from "../Component/Title";

const SignUp = () => (
  <>
    <CustomizedCard className="SignUpCard">
      <Title Title="SignUp" />
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
      >
        <Input
          type="text"
          CustomeClass="NameClass"
          forInput="name"
          Label="Name"
          placeholder="Enter Name"
        />
        <Input
          type="Email"
          CustomeClass="EmailClass"
          forInput=" Email"
          Label="Email"
          placeholder="Enter email"
        />
        <Input
          type="Password"
          CustomeClass="PasswordClass"
          forInput="password"
          Label="password"
          placeholder="Enter password"
        />
        <div className="SignUpButton">
          <BasicButtons name="Sign Up" />
        </div>
      </form>
      <p className="SingUpaccount">
        Already have an account ? <Link to={Paths.home}>Login</Link>{" "}
      </p>
    </CustomizedCard>
  </>
);

export default SignUp;
