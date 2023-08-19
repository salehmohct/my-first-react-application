import React from "react";
import { CustomizedLabel } from "../Global/Style";
import { CustomizedInput } from "../Global/Style";
import FormControl from "@mui/material/FormControl";
const Input = (props) => (
  <FormControl>
    {" "}
    <CustomizedLabel htmlFor={props.forInput}>{props.Label}</CustomizedLabel>
    <CustomizedInput
      className={props.CustomeClass}
      type={props.type}
      placeholder={props.placeholder}
      id={props.forInput}
    ></CustomizedInput>
  </FormControl>
);

export default Input;
