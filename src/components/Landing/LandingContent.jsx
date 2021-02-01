import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const LandingContent = () => {
  return (
    <Grid container item md={5}>
      <Grid container item md={11} lg={9} alignContent='center' justify='center'>
        <Typography variant='h1'>Charlotte Docking Services</Typography>
        <Typography variant='h1'>New Docks. Repairs. Platforms. Shore Management.</Typography>
      </Grid>
    </Grid>
  );
};

export default LandingContent;
