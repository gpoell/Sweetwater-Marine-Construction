import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const DockDesignList = () => {
  return (
    <Grid container item xs={10} justify='center'>
      <ul style={{ listStyleType: "circle",  }}>
        <li style={{ paddingBottom: 10 }}>
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
  )
};

export default DockDesignList;