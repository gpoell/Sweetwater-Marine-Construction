import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Typography from "@material-ui/core/Typography";
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
// import { styles } from "./styles";

const Permits = props => {
  return (
      <ContentWrapper style={{ marginBottom: 30, marginTop: 30}}>
        <Grid container item xs={12} justify='center'>
          <Typography variant='h4'>Getting Started</Typography>
        </Grid>
        <Grid container item xs={10} sm={12}>
          <Typography variant='body2'>The Federal Energy Regulatory Commission (FERC) requires Duke Energy to implement a Shoreline Management Plan that defines what and where specific activities are allowed along the shoreline. Permits are required for all activities within the boundaries of Duke Energy's lake property.</Typography>
        </Grid>


        <Grid container item xs={10} sm={12} lg={3} justify='flex-start' style={{paddingTop: 30}}>
          <Grid container item xs={2} sm={1}>
            <LooksOneIcon color='secondary' fontSize='small' style={{ paddingRight: 10 }}/>
          </Grid>
          <Grid container item xs={10} justify='flex-start'>
            <Typography variant='body2' style={{ fontSize: 16 }}><b>Acquire Land Survey of Property</b></Typography>
          </Grid>
          <Grid container item xs={2} />
          <Grid container item xs={10} alignItems='flex-start'>
            <Typography variant='body2' style={{ fontSize: 10 }}>
              Contact your local surveying company to acquire a stamped survey copy of your property. This is required to submit the Lake Permit Application.
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={10} sm={12} lg={3} justify='flex-start' style={{paddingTop: 30}}>
          <Grid container item xs={2} sm={1}>
            <LooksTwoIcon color='secondary' fontSize='small' style={{ paddingRight: 10 }}/>
          </Grid>
          <Grid container item xs={10} justify='flex-start'>
            <Typography variant='body2' style={{ fontSize: 16 }}><b>Submit Lake Permit Application</b></Typography>
          </Grid>
          <Grid container item xs={2} />
          <Grid container item xs={10} alignItems='flex-start'>
            <Typography variant='body2' style={{ fontSize: 10 }}>
              Fill out the Lake Permit Application &amp; User Agreement on Duke Energy's website: Permits for Shoreline Activities
            </Typography>
          </Grid>
        </Grid>

        <Grid container item xs={10} sm={12} lg={3} justify='flex-start' style={{paddingTop: 30}}>
          <Grid container item xs={2} sm={1}>
            <LooksTwoIcon color='secondary' fontSize='small' style={{ paddingRight: 10 }}/>
          </Grid>
          <Grid container item xs={10} justify='flex-start'>
            <Typography variant='body2' style={{ fontSize: 16 }}><b>Contact Sweetwater Marine Construction</b></Typography>
          </Grid>
          <Grid container item xs={2} />
          <Grid container item xs={10} alignItems='flex-start'>
            <Typography variant='body2' style={{ fontSize: 10 }}>
              Call Sweetwater Marine to review your Lake Permit Application &amp; User Agreement before submitting to Duke Lake Services in order to determine if a building permit is required. Upon completion, Sweetwater Marine will monitor your permit status which can take up to <b>45 days</b> for approval.
            </Typography>
          </Grid>
        </Grid>

      {/* <Grid container item xs={12} lg={3} wrap='wrap'>
        <Grid container item xs={12} alignItems="center" wrap='wrap'>
          <Looks3Icon color='secondary'fontSize='small'/>
          <Typography style={{ fontSize: 16 }}>Contact Sweetwater Marine Construction</Typography>
        </Grid>
        <Grid container item xs={12}>
          <Typography style={{ fontSize: 12, textAlign: 'center' }}>
            Contact your local surveying company to acquire a stamped survey copy of your property. This is required to submit the Lake Permit Application.
          </Typography>
        </Grid>
      </Grid> */}


      </ContentWrapper>
  );
};

export default Permits;
