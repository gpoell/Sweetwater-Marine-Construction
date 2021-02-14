import React from "react";
import Grid from "@material-ui/core/Grid";

const ContentWrapper = (props) => {
  return (
    <Grid container justify='center' style={props.style}>
      <Grid container item xs={10} xl={8} justify='center'>
        {props.children}
      </Grid>
    </Grid>
  );
};

export default ContentWrapper;
