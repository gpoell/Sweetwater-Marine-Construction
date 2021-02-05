import React from "react";
import Grid from "@material-ui/core/Grid";
import landingImage from "../../images/background/6784.png";
import { styles } from "./styles";

const LandingImage = (props) => {
  return (
    <Grid container>
      <img
        src={landingImage}
        alt=''
        style={styles.image}
      />
    </Grid>
  );
};

export default LandingImage;
