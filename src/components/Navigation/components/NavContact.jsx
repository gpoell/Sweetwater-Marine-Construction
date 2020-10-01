import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";

const NavContact = () => {
  return (
    <Grid container item md={5} lg={4} alignItems='center' justify='center'>
      <Button
        variant='contained'
        color='primary'
        href='tel:8283711707'
        size='large'
        disableElevation
        startIcon={<PhoneIcon />}
      >
        <Typography variant='h6'>(828) 371-1707</Typography>
      </Button>
    </Grid>
  );
};
export default NavContact;
