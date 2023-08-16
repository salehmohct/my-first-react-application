import React from "react";
import { CustomizedButton } from "../Global/Style";
import "../Styling/DataUpload.css";
const BulkUpload = () => {
  return (
    <>
      <h1>Upload CSV document</h1>
      <div className="upload">
        <input className="input" type="text" placeholder="Upload here..." />
        <CustomizedButton>Upload</CustomizedButton>
      </div>
    </>
  );
};

export default BulkUpload;
