import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";

const FooterTwo = () => {
  return (
    <Grid container item xs={12} lg={8} justify='center'>
      <Typography variant='subtitle1'>
        Sweetwater Marine Construction &#169; 2019 | Charlotte, North Carolina
      </Typography>
      <Typography variant='subtitle2'>
        Lake Norman &#8226; Mountain Island Lake &#8226; Lake Wylie
      </Typography>
    </Grid>
  );
};

export default FooterTwo;
