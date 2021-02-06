import React from "react";
import landingImage from "../../images/background/blue_wave.png"
import { styles } from "./styles";

const LandingImage = () => {
  return (
    <img
      src={landingImage}
      alt='Sweetwater Marine Construction'
      style={styles.backgroundImg}
    />
  );
};

export default LandingImage;
