import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import PhoneIcon from "@material-ui/icons/Phone";

const FooterOne = () => {
  return (
    <>
      <Grid container item xs={8}>
        <Typography variant='h5'>
          Call us today for questions about our services or inquiries about new
          services.
        </Typography>
      </Grid>
      <Grid container item xs={12} justify='center'>
        <Button
          variant='contained'
          color='primary'
          href='tel:8283711707'
          size='large'
          disableElevation
          startIcon={<PhoneIcon />}
        >
          <Typography variant='h6'>Call Today</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default FooterOne;
