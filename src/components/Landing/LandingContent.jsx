import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

const LandingContent = (props) => {
  return (
    <Grid container justify='center'>
      <Grid container item xs={12} justify='center'>
        <Typography variant='h1'>Sweetwater Marine Construction</Typography>
      </Grid>
      <Grid container item xs={12} justify='center'>
        <Typography variant='h3'>Dock Repair and Barge Services</Typography>
      </Grid>
      <Grid container item xs={12} sm={8} justify='center'>
        <Button
          variant='contained'
          color='secondary'
          href='tel:8283711707'
          size={props.mobile ? "small" : "large"}
          fullWidth={props.mobile}
        >
          Schedule Appointment
        </Button>
      </Grid>
    </Grid>
  );
};

export default LandingContent;
