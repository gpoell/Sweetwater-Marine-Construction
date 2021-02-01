import React from "react";
import Grid from "@material-ui/core/Grid";
import image from "../../images/logo/SWMC_round_navy.png"
import { styles } from "./styles";

const LandingImage = () => {
  return (
    <Grid container item lg={3}>
      <img src={image} style={styles.image} alt='Sweetwater Marine Construction'/>
    </Grid>
  );
};

export default LandingImage;
