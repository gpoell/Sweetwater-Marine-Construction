import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";

const NavContact = (props) => {
  return (
    <>
      <Grid container item sm={4} md={6} lg={8} justify='flex-end'>
        <Button
          variant='text'
          color='secondary'
          href='mailto:thomaswellensjr@gmail.com'
        >
          <EmailIcon fontSize='small'/>
        </Button>
      </Grid>
      <Grid container item sm={8} md={6} lg={4} justify='flex-end'>
        <Button
          variant='contained'
          color='primary'
          href='tel:7047269245'
          size='large'
          startIcon={<PhoneIphoneIcon fontSize='small' />}
        >
          <Typography variant='h6'>(704) 726-9245</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default NavContact;
