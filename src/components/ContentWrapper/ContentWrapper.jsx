import React from "react";
import Grid from "@material-ui/core/Grid";

const ContentWrapper = (props) => {
  return (
    <Grid container justify='center' style={props.style}>
      <Grid container item sm={12} lg={8}>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default ContentWrapper;
