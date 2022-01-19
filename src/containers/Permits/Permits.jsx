import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Typography from "@material-ui/core/Typography";
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
// import { styles } from "./styles";

const Permits = () => {
  return (
      <ContentWrapper style={{ marginBottom: 30, marginTop: 30}}>
        <Grid container item xs={12} justify='center'>
          <Typography variant='h4'>Getting Started</Typography>
        </Grid>
        <Grid container item xs={10} sm={12}>
          <Typography variant='body2'>The Federal Energy Regulatory Commission (FERC) requires Duke Energy to implement a Shoreline Management Plan that defines what and where specific activities are allowed along the shoreline. Permits are required for all activities within the boundaries of Duke Energy's lake property. Sweetwater Marine will monitor your permit status which can take up to 45 days for approval.</Typography>
        </Grid>



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

          <Grid container item xs={10} sm={10} md={4} style={{ paddingTop: 30 }}>
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
                <a
                  href="https://www.duke-energy.com/Community/Lakes/Services/Permits-Shoreline-Activities"
                  target='_blank'
                  rel="noopener noreferrer"
                  title="Permits for Shoreline Activities"
                >Permits for Shoreline Activities</a>
              </Typography>
            </Grid>
          </Grid>

          <Grid container item xs={10} sm={10} md={4} style={{ paddingTop: 30 }}>
            <Grid container item xs={2} sm={1}>
              <Looks3Icon color='secondary' fontSize='small'/>
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


      </ContentWrapper>
  );
};

export default Permits;
