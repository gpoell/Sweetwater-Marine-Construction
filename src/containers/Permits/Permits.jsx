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
          <Typography variant='body1'>The Federal Energy Regulatory Commission (FERC) requires Duke Energy to implement a Shoreline Management Plan that defines what and where specific activities are allowed along the shoreline. Permits are required for all activities within the boundaries of Duke Energy's lake property.</Typography>
        </Grid>


        {/* <Grid container item lg={3}>
          <Grid container item xs={12} alignItems="center">
            <LooksOneIcon color='secondary' fontSize='small'/>
            <Typography style={{ fontSize: 16 }}>Acquire Land Survey of Property</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography style={{ fontSize: 12}}>
              Contact your local surveying company to acquire a stamped survey copy of your property. This is required to submit the Lake Permit Application.
            </Typography>
          </Grid>
        </Grid>


        <Grid container item lg={3}>
          <Grid container item xs={12} alignItems="center">
            <LooksTwoIcon color='secondary'fontSize='small'/>
            <Typography style={{ fontSize: 16 }}>Submit Lake Permit Application</Typography>
          </Grid>
          <Grid container item xs={12}>
            <Typography style={{ fontSize: 12, textAlign: 'center' }}>
              Contact your local surveying company to acquire a stamped survey copy of your property. This is required to submit the Lake Permit Application.
            </Typography>
          </Grid>
        </Grid>


        <Grid container item lg={3}>
          <Grid container item xs={12} alignItems="center" zeroMinWidth>
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
