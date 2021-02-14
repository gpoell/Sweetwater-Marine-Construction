import React from "react";
import Grid from "@material-ui/core/Grid";
import logo from "../../images/logo/SWMC_round_navy.png";
import { styles } from "./styles";

const LandingLogo = () => {
  return (
    <Grid container item xs={10} sm={6} md={6} lg={3} xl={3}>
      <img src={logo} alt='Sweetwater Marine Construction' style={styles.logo}/>
    </Grid>
  );
};

export default LandingLogo;
