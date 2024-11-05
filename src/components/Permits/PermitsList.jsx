import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Link from "@material-ui/core/Link";

const PermitsList = () => {
  return (
    <Grid container alignItems='flex-start' justify='center'>
      <Grid container item xs={10} sm={10} md={4} style={{ paddingTop: 30 }}>
        <Grid container item xs={2} sm={1}>
          <LooksOneIcon color='secondary' fontSize='small'/>
        </Grid>
        <Grid container item xs={10} sm={11}>
          <Typography variant='h6'>Acquire Land Survey of Property</Typography>
        </Grid>
        <Grid container item xs={2} sm={1}/>
        <Grid container item xs={10} sm={11}>
          <Typography variant='body2'>
            Contact your local surveying company to acquire a stamped survey copy of your property. This is required to submit the Lake Permit Application.
          </Typography>
        </Grid>
      </Grid>

      {/* <Grid container item xs={10} sm={10} md={4} style={{ paddingTop: 30 }}>
        <Grid container item xs={2} sm={1}>
          <LooksTwoIcon color='secondary' fontSize='small'/>
        </Grid>
        <Grid container item xs={10} sm={11}>
          <Typography variant='h6'>Prepare Lake Permit Application</Typography>
        </Grid>
        <Grid container item xs={2} sm={1}/>
        <Grid container item xs={10} sm={11}>
          <Typography variant='body2'>
            Fill out the Lake Permit Application &amp; User Agreement on Duke Energy's website: {' '}
            <br />
            <br />
            <Link
              href="https://www.duke-energy.com/Community/Lakes/Services/Permits-Shoreline-Activities"
              target='_blank'
              rel="noopener noreferrer"
              title="Permits for Shoreline Activities"
              color="secondary"
              underline="always"    
            >Permits for Shoreline Activities</Link>
          </Typography>
        </Grid>
      </Grid> */}

      <Grid container item xs={10} sm={10} md={4} style={{ paddingTop: 30 }}>
        <Grid container item xs={2} sm={1}>
          <LooksTwoIcon color='secondary' fontSize='small'/>
        </Grid>
        <Grid container item xs={10} sm={11}>
          <Typography variant='h6'>Contact Us</Typography>
        </Grid>
        <Grid container item xs={2} sm={1}/>
        <Grid container item xs={10} sm={11}>
          <Typography variant='body2'>
            Call Sweetwater Marine to review your Lake Permit Application &amp; User Agreement before submitting to Duke Lake Services in order to determine if a building permit is required.
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
};

export default PermitsList;