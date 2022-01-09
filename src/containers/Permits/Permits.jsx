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
      <ContentWrapper style={null}>
        <Grid container item xs={12} justify='center'>
          <Typography variant='h4'>Getting Started</Typography>
        </Grid>
        <Grid container item xs={12} justify="center" style={{ textAlign: 'center', paddingBottom: 30 }}>
          <Typography variant='body2'>The Federal Energy Regulatory Commission (FERC) requires Duke Energy to implement a Shoreline Management Plan that defines what and where specific activities are allowed along the shoreline. Permits are required for all activities within the boundaries of Duke Energy's lake property.</Typography>
        </Grid>
        <Grid container item lg={4} justify='center' alignItems="center">
          <LooksOneIcon color='secondary' fontSize='large'/>
          <Typography variant='h6'>Acquire Land Survey of Property</Typography>
        </Grid>
        <Grid container item lg={4} justify='center' alignItems="center">
          <LooksTwoIcon color='secondary'fontSize='large'/>
          <Typography variant='h6'>Submit Lake Permit Application</Typography>
        </Grid>
        <Grid container item lg={4} justify='center' alignItems="center">
          <Looks3Icon color='secondary'fontSize='large'/>
          <Typography variant='h6'>Contact Sweetwater Marine Construction</Typography>
        </Grid>
      </ContentWrapper>
  );
};

export default Permits;
