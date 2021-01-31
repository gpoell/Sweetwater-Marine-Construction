import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";

const NavContact = (props) => {
  return (
    <>
      <Grid
        container
        item
        md={7}
        lg={8}
        alignItems='center'
        justify='flex-end'
      >
        <Button
          variant='text'
          color='secondary'
          href='mailto:thomaswellensjr@gmail.com'
          size='large'
          startIcon={<EmailIcon />}
        >
          <Typography variant='h6'>ThomasWellensJr@gmail.com</Typography>
        </Button>
      </Grid>
      <Grid container item md={5} lg={4} alignItems='center' justify='center'>
        <Button
          variant='contained'
          color='primary'
          href='tel:7047269245'
          size='large'
          disableElevation
          startIcon={<PhoneIcon />}
        >
          <Typography variant='h6'>(704) 726-9245</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default NavContact;
