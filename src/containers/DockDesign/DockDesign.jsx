import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Typography from "@material-ui/core/Typography";

const DockDesign = () => {
  return (
      <ContentWrapper style={{ marginBottom: 30, marginTop: 30}}>
        <Grid container item xs={12} justify='center'>
          <Typography variant='h4'>Dock Design Considerations</Typography>
        </Grid>
        <Grid container item xs={10} sm={12}>
          <Typography variant='body2'>The design of your dock can greatly impact the longevity of the structure and its usability. While designing your dock, reference Duke Energy's
          {' '}
          <a
                  href="https://www.duke-energy.com/Community/Lakes/Services/Permits-Shoreline-Activities"
                  target='_blank'
                  rel="noopener noreferrer"
                  title="Permits for Shoreline Activities"
                >Dock Design Considerations</a>
          {' '}
          for additional recommendations and consider the following below:
          </Typography>
        </Grid>
        <Grid container item xs={10} sm={10} justify='center'>
          <ul style={{ listStyleType: "circle",  }}>
            <li>
              <Typography variant='body2'>
                The dock surface must not be more than 1,000 sqft over the water.
              </Typography>
            </li>
            <li>
              <Typography variant='body2'>
                The edge of the dock cannot be within 10 ft of the property line.
              </Typography>
            </li>
          </ul>
        </Grid>


      </ContentWrapper>
  );
};

export default DockDesign;
