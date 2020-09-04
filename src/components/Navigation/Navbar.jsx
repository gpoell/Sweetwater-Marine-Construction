import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import NavTabs from "./components/NavTabs";
import NavContact from "./components/NavContact";

const NavBar = (props) => {
  return (
    <ContentWrapper style={{ backgroundColor: "grey" }}>
      <Grid item lg={6}>
        <NavTabs value={props.value} handleChange={props.handleChange} />
      </Grid>
      <Grid item lg={6}>
        <NavContact />
      </Grid>
    </ContentWrapper>
  );
};

export default NavBar;
