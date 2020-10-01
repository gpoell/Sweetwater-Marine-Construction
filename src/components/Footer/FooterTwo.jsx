import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { styles } from "./styles";

const FooterTwo = () => {
  return (
    <Grid container item xs={8} sm={12} justify='center'>
      <Typography variant='subtitle1' style={styles.footerTwo}>
        Sweetwater Marine Construction &#169; 2019 | Charlotte, North Carolina
      </Typography>
    </Grid>
  );
};

export default FooterTwo;
