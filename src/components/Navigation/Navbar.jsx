import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import NavTabs from "./components/NavTabs";
import NavContact from "./components/NavContact";

const NavBar = (props) => {
  return (
    <AppBar position='static'>
      <Grid container spacing={24}>
        <Grid item lg={6}>
          <NavTabs />
        </Grid>
        <Grid item lg={6}>
          <NavContact />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
