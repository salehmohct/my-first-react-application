import React from "react";
import { CustomizedTitle } from "../Global/Style";
import { CusomizedImage2 } from "../Global/Style";
import { CusomizedSvg } from "../Global/Style";
const Chart = (props) => (
  <>
    <CustomizedTitle>Chart {props.No}</CustomizedTitle>
    <CusomizedSvg viewBox="0 0 601 382" fill="#fefbfb">
      <CusomizedImage2 href={props.path} />
    </CusomizedSvg>
  </>
);

export default Chart;
