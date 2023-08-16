import * as React from "react";
import "../Styling/Login.css";
import Input from "../Component/Input";
import { CustomizedButton } from "../Global/Style";

import { CustomizedCard } from "../Global/Style";
import { Link } from "react-router-dom";
import { Paths } from "../Router";
import Title from "../Component/Title";
function Login() {
  return (
    <>
      <CustomizedCard>
        <Title Title="LogIn" />
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
            placeholder="Enter email"
          />
          <Input
            type="Password"
            CustomeClass="PasswordClass"
            forInput="password"
            Label="Password"
            placeholder="Enter password"
          />
          <Link className="forgetpassword" to={Paths.forgetPassword}>
            Forgetpassword ?
          </Link>
          <Link to={Paths.Verfication}>
            <CustomizedButton>Login</CustomizedButton>
          </Link>
        </form>
        <p className="account">
          Dont have an account ?{" "}
          <Link className="span2" to={Paths.SignUp}>
            Sign up
          </Link>{" "}
        </p>
      </CustomizedCard>
    </>
  );
}

export default Login;
