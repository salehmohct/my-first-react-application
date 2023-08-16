import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import Button from "@mui/material/Button";
import Table from "@mui/material/Table";
import Typography from "@mui/material/Typography";

export const CustomizedCard = styled(Card)`
  background-color: #f8f8f8;
  width: 350px;
  height: 350px;
  text-align: center;
  border-radius: 15%;
  padding-top: 30px;
  margin: 180px auto;
  border: 1px solid #000000;
`;
export const CustomizedLabel = styled("Label")`
  font-family: Inter;
  font-size: 10px;
  font-weight: 400;
  line-height: 23px;
  letter-spacing: 0em;
  text-align: left;
  padding: 2px;
`;

export const CustomizedInput = styled("Input")`
  width: 250px;
  height: 30px;
  border-radius: 8px;
  padding-left: 5px;
  border: 1px solid #d9d9d9;
`;
export const CustomizedButton = styled(Button)`
  display: block;
  background-color: black;
  color: white;
  &:hover {
    background-color: rgb(24, 26, 27);
  }
`;
export const CustomizedTitle = styled("h1")`
  font-family: Inter;
  font-size: 20px;
  font-weight: 700;
  line-height: 44px;
  letter-spacing: 0em;
  text-align: center;
  margin: 0;
`;
export const CustomizedDesc = styled("h1")`
  font-family: Roboto;
  font-size: 25px;
  font-weight: 700;
  line-height: 35px;
  letter-spacing: 0em;
  text-align: left;
  color: #fd0808;
  margin: -150px auto;
`;

export const CusomizedImage = styled("img")`
  width: 150px;
  height: 62px;
`;

export const CusomizedAppBar = styled(Typography)`
  width: 100%;
  height: 48px;
  display: flex !important;
  justify-content: space-between !important;
  align-items: center !important;
`;

export const CusomizedImage2 = styled("image")`
  width: 100%;
  height: 100%;
`;
export const CusomizedSvg = styled("svg")`
  border: 1px solid rgba(150, 150, 150, 1);
  background-color: rgba(249, 249, 249, 1);
  display: flex;
  justify-content: center !important;
  align-items: center !important;
  border-radius: 10px;
`;
export const CusomizedTable = styled(Table)`
  border: 1px solid rgba(152, 152, 152, 1);
  background-color: rgb(152 152 152 / 45%);
`;
