import React from "react";
import Grid from "@material-ui/core/Grid";
import desktop from "../../images/background/blue_wave_desktop.png"
import mobile from "../../images/background/blue_wave_mobile.png"
import { styles } from "./styles";

const LandingImage = (props) => {
  return (
    <Grid container item xs={12}>
      <img
        src={props.mobile ? mobile : desktop}
        alt='Sweetwater Marine Construction'
        style={styles.backgroundImg}
      />
    </Grid>

  );
};

export default LandingImage;
