import React from "react";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import NavTabs from "./components/NavTabs";
import NavContact from "./components/NavContact";

const NavBar = (props) => {
  return (
    <AppBar position='static'>
      <Grid container>
        <Grid item lg={6}>
          <NavTabs value={props.value} />
        </Grid>
        <Grid item lg={6}>
          <NavContact />
        </Grid>
      </Grid>
    </AppBar>
  );
};

export default NavBar;
