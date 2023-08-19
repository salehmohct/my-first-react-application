import * as React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import ArrowRightIcon from "@mui/icons-material/ArrowRight";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import { Link } from "react-router-dom";
import { Paths } from "../Router";
import "../Styling/ResponsiveDrawer.css";
export default function NestedList(props) {
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <List component="nav" aria-labelledby="nested-list-subheader">
      <ListItemButton sx={{ p: 0 }} onClick={handleClick}>
        {props.primary === "Report" ? (
          <Link className="NestedListAnchor" to={Paths.ReprotPage}>
            <ListItemText className="NestedListClass" primary={props.primary} />
          </Link>
        ) : (
          <ListItemText primary={props.primary} />
        )}

        {open ? <ArrowDropDownIcon /> : <ArrowRightIcon />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {props.NoItem === "1" ? (
            <ListItemButton sx={{ pl: 4 }}>
              <Link className="NestedListAnchor" to={Paths.MyReport}>
                <ListItemText
                  className="NestedListSecondary"
                  primary={props.secondary}
                />
              </Link>
            </ListItemButton>
          ) : (
            props.NoItem.map((item) => (
              <ListItemButton key={item} sx={{ pl: 4 }}>
                <Link
                  className="NestedListAnchor"
                  to={
                    item === "Environment"
                      ? Paths.Environement
                      : item === "Social"
                      ? Paths.Social
                      : Paths.Governance
                  }
                >
                  {<ListItemText primary={item} />}
                </Link>
              </ListItemButton>
            ))
          )}
        </List>
      </Collapse>
    </List>
  );
}
