import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import PhoneIphoneIcon from '@material-ui/icons/PhoneIphone';
import { styles } from "./styles";

const LandingContent = (props) => {
  return (
    <>
      <Grid container item xs={12} sm={12} justify='center'>
        <Typography variant='h1'>New Docks &middot; Dock Repairs &middot; Barge Services</Typography>
      </Grid>
      <Grid container item xs={10} justify='center'>
        <Typography variant='h3'>Lake Norman &#8226; Mountain Island Lake &#8226; Lake Wylie</Typography>
      </Grid>
      <Grid container item xs={10} justify='center' style={styles.buttonContainer}>
        <Button
            variant='contained'
            color='secondary'
            href='tel:7047269245'
            size='large'
            style={styles.button}
            startIcon={<PhoneIphoneIcon />}
          >
            <Typography variant='button'>Schedule Today</Typography>
        </Button>
      </Grid>
    </>
  );
};

export default LandingContent;
