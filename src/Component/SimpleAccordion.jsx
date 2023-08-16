import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import List from "@mui/material/List";

import ListItemText from "@mui/material/ListItemText";
export default function BasicAccordion(props) {
  return (
    <div>
      <Accordion defaultExpanded={props.extended}>
        <AccordionSummary
          className="accordionTitleBox"
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography className="accordionTitle">{props.title}</Typography>
        </AccordionSummary>
        <AccordionDetails className="accordionDetails">
          {props.item.map((item) => (
            <List
              component="nav"
              className="accordionText"
              aria-labelledby="nested-list-subheader"
            >
              <ListItemText sx={{ p: 2, backgroundColor: "gre" }}>
                {item}
              </ListItemText>
            </List>
          ))}
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
