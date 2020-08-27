import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import PhoneIcon from "@material-ui/icons/Phone";
import EmailIcon from "@material-ui/icons/Email";
import Button from "@material-ui/core/Button";

const NavContact = (props) => {
  return (
    <Grid container>
      <Grid container item lg={8} alignItems='center' justify='flex-end'>
        <Button
          variant='text'
          color='secondary'
          href='mailto:millersplumbing99@yahoo.com'
          size='large'
          startIcon={<EmailIcon />}
        >
          <Typography variant='h6'>
            SweetwaterMarineConstruction@yahoo.com
          </Typography>
        </Button>
      </Grid>
      <Grid container item lg={4} alignItems='center' justify='center'>
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
    </Grid>
  );
};
export default NavContact;
