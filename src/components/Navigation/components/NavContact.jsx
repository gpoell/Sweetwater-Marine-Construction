import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import Button from "@material-ui/core/Button";

const NavContact = (props) => {
  return (
    <Grid container item xs={12} alignItems='center' justify='center'>
      <Button
        variant='text'
        color='secondary'
        href='tel:8283711707'
        size='small'
        disableElevation
        startIcon={<PhoneIcon />}
      >
        <Typography variant='h6'>(828) 371-1707</Typography>
      </Button>
    </Grid>
  );
};
export default NavContact;
