import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ApartmentIcon from "@mui/icons-material/Apartment";
import AssessmentIcon from "@mui/icons-material/Assessment";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import Avatar from "@mui/material/Avatar";
import NestedList from "./CollapseList";
import Logo from "../Component/Logo";
import { Link, NavLink } from "react-router-dom";
import { Paths } from "../Router";
import { CusomizedAppBar } from "../Global/Style";
import "../Styling/ResponsiveDrawer.css";
const drawerWidth = 240;

function ResponsiveDrawer(props) {
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <Logo />
      <Divider />
      <List>
        {[
          <NavLink className="LinkItem" to={Paths.Dashboard}>
            Dashboard
          </NavLink>,
          <NavLink className="LinkItem" to={Paths.CompanyDetails}>
            Company details
          </NavLink>,
          <NestedList
            className="LinkItem"
            primary="Report"
            secondary="My Report"
            NoItem="1"
          />,
          <NavLink className="LinkItem" to={Paths.DataUpload}>
            Data Upload
          </NavLink>,
          <NestedList
            className="LinkItem"
            primary="Analytics"
            NoItem={["Environment", "Social", "Governancy"]}
          />,
        ].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index === 0 && <DashboardIcon />}
                {index === 1 && <ApartmentIcon />}
                {index === 2 && <AssessmentIcon />}
                {index === 3 && <CloudUploadIcon />}
                {index === 4 && <InsertChartIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
    </div>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <CusomizedAppBar>
            <h1 className="PageTitle">{props.name}</h1>
            <Link to={Paths.ProfileDetails}>
              <IconButton sx={{ p: 0 }}>
                <Avatar className="avatart" alt="Remy_Sharp" />
              </IconButton>
            </Link>
          </CusomizedAppBar>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
        aria-label="mailbox folders"
      >
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: "none", sm: "block" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          p: 3,
          width: { sm: `calc(100% - ${drawerWidth}px)` },
        }}
      >
        <Toolbar />
        <Typography variant="h1">{props.Pages}</Typography>
      </Box>
    </Box>
  );
}

export default ResponsiveDrawer;
