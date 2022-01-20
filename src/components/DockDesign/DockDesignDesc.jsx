import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";

const DockDesignDesc = props => {
  const { mobile } = props;
  return (
    <>
      { mobile ?
      <Grid container item xs={10} sm={12}>
        <Typography variant='body2'>
          The design of your dock can greatly impact the longevity of the structure and its usability. While designing your dock, reference Duke Energy's
          {' '}
          <Link
            href="https://www.duke-energy.com/Community/Lakes/Services/Permits-Shoreline-Activities"
            target='_blank'
            rel="noopener noreferrer"
            title="Permits for Shoreline Activities"
            color="secondary"
            underline="always"
          >Dock Design Considerations</Link>
          {' '}
          for additional recommendations. Also consider the following requirements:
        </Typography>
      </Grid>
      :
      <Grid container item xs={10} sm={12} justify='center' style={{ textAlign: "center" }}>
        <Typography variant='body2'>
          The design of your dock can greatly impact the longevity of the structure and its usability.
          <br />
          While designing your dock, reference Duke Energy's
          {' '}
          <Link
            href="https://www.duke-energy.com/Community/Lakes/Services/Permits-Shoreline-Activities"
            target='_blank'
            rel="noopener noreferrer"
            title="Permits for Shoreline Activities"
            color="secondary"
            underline="always"
          >Dock Design Considerations</Link>
          {' '}
          for additional recommendations.
          <br />
          Also consider the following requirements:
        </Typography>
      </Grid>
      }
    </>
  )
};

export default DockDesignDesc;