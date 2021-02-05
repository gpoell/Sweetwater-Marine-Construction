import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";

const NavContact = (props) => {
  return (
    <>
      <Grid container item xs={2} md={8} lg={9} alignItems='center' justify='flex-end'>
        <Button
          variant='text'
          color='secondary'
          href='mailto:thomaswellensjr@gmail.com'
          size={props.mobile ? 'small' : 'large'}
          startIcon={<EmailIcon />}
        >
          {!props.mobile && <Typography variant='h6'>ThomasWellensJr@gmail.com</Typography>}
        </Button>
      </Grid>
      <Grid container item xs={1} sm={2} md={4} lg={3} alignItems='center' justify='center'>
        <Button
          variant={props.mobile ? 'text' : 'contained'}
          color='primary'
          href='tel:7047269245'
          size={props.mobile ? 'small' : 'large'}
          disableElevation
          startIcon={<PhoneIcon />}
        >
          {!props.mobile && <Typography variant='h6'>(704) 726-9245</Typography>}
        </Button>
      </Grid>
    </>
  );
};

export default NavContact;
