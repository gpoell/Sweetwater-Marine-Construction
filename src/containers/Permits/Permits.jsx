import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Typography from "@material-ui/core/Typography";
import LooksOneIcon from '@material-ui/icons/LooksOne';
import LooksTwoIcon from '@material-ui/icons/LooksTwo';
import Looks3Icon from '@material-ui/icons/Looks3';
import Looks4Icon from '@material-ui/icons/Looks4';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
// import { styles } from "./styles";

const Permits = props => {
  return (
      <ContentWrapper style={{ marginBottom: 80, marginTop: 30}}>
        <Grid container item xs={12} justify='center' style={{ padding: 15 }}>
          <Typography variant='h4'>Getting Started</Typography>
        </Grid>
        <Grid container item xs={12} justify="center" style={{ textAlign: 'center'}}>
          <Typography variant='body2'>The Federal Energy Regulatory Commission (FERC) requires Duke Energy to implement a Shoreline Management Plan that defines what and where specific activities are allowed along the shoreline. Permits are required for all activities within the boundaries of Duke Energy's lake property. Sweetwater Marine will monitor your permit status which can take up to 45 days for approval.</Typography>
        </Grid>

        {/* <ol>
          <li>Contact a registered surveying company to acquire a stamped survey copy of your property. This is required to submit the Lake Permit Application.</li>
          <li>Fill out the Lake Permit Application &amp; User Agreement on Duke Energy's website: Permits for Shoreline Activities.</li>
          <li>Call Sweetwater Marine to review your Lake Permit Application &amp; User Agreement, and submit the complete application to Duke Lake Services.</li>
        </ol> */}

          <List>
            {/* Step One */}
            <ListItem>
              <ListItemIcon>
                <LooksOneIcon color='secondary' fontSize='small'/>
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontSize: 16} }>
                  Contact a registered surveying company to acquire a stamped survey copy of your property. This is required to submit the Lake Permit Application.
                </Typography>
              </ListItemText>
            </ListItem>

            {/* Step Two */}
            <ListItem>
              <ListItemIcon>
                <LooksTwoIcon color='secondary' fontSize='small'/>
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontSize: 16} }>
                Fill out the Lake Permit Application &amp; User Agreement on Duke Energy's website: Permits for Shoreline Activities
                </Typography>
              </ListItemText>
            </ListItem>

            {/* Step Three */}
            <ListItem>
              <ListItemIcon>
                <Looks3Icon color='secondary' fontSize='small'/>
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontSize: 16} }>
                Call Sweetwater Marine to review your Lake Permit Application &amp; User Agreement before submitting to Duke Lake Services in order to determine if a building permit is required.
                </Typography>
              </ListItemText>
            </ListItem>

            {/* Step Four */}
            <ListItem>
              <ListItemIcon>
                <Looks4Icon color='secondary' fontSize='small'/>
              </ListItemIcon>
              <ListItemText>
                <Typography style={{ fontSize: 16} }>
                  Review the Dock Design Information section for recommendations on your dock design. As an additional note, the dock surface must be 1,000 sqft or less over the water and the edge of the dock cannot be within 10ft of the property line. 
                </Typography>
              </ListItemText>
            </ListItem>

          </List>

      </ContentWrapper>
  );
};

export default Permits;
