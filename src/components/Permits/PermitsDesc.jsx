import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const PermitsDesc = () => {
  return (
    <Grid container item xs={10} sm={12}>
      <Typography variant='body2'>
        The Federal Energy Regulatory Commission (FERC) requires Duke Energy to implement a Shoreline Management Plan that defines what and where specific activities are allowed along the shoreline. Permits are required for all activities within the boundaries of Duke Energy's lake property. Sweetwater Marine will monitor your permit status which can take up to 45 days for approval.
      </Typography>
    </Grid>
  )
};

export default PermitsDesc;