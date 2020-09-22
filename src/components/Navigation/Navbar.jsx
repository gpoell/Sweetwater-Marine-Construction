import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Typography from "@material-ui/core/Typography";
import NavContact from "./components/NavContact";

const NavBar = (props) => {
  return (
    <ContentWrapper>
      <Grid container item xs={12} justify='center' style={{ padding: 20 }}>
        <Typography variant='h2'>Sweetwater Marine Construction</Typography>
      </Grid>
      {/* <NavContact /> */}
    </ContentWrapper>
  );
};

export default NavBar;
