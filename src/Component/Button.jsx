import { CustomizedButton } from "../Global/Style";
export default function BasicButtons(props) {
  return (

      <CustomizedButton type="submit" className={"button"}>
        {props.name}
      </CustomizedButton>

  );
}
