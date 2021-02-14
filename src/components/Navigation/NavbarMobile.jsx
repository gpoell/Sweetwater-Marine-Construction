import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import MailOutlineIcon from '@material-ui/icons/MailOutline';

const NavbarMobile = () => {
  return (
    <>
      <Grid container item xs={8} justify='flex-start'>
        <Typography variant='h2'>SWEETWATER MARINE CONSTRUCTION</Typography>
      </Grid>
      <Grid container item xs={2} justify='flex-end'>
        <MailOutlineIcon fontSize='small' color='primary' />
      </Grid>
      <Grid container item xs={2} justify='flex-end'>
        <PhoneIphoneIcon fontSize='small' color='primary' />
      </Grid>
    </>
  );
};

export default NavbarMobile;
