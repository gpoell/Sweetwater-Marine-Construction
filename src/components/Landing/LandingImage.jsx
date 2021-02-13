import React from "react";
import desktop from "../../images/background/blue_wave_desktop.png"
import mobile from "../../images/background/blue_wave_mobile.png"
import { styles } from "./styles";

const LandingImage = (props) => {
  return (
    <img
      src={props.mobile ? mobile : desktop}
      alt='Sweetwater Marine Construction'
      style={styles.backgroundImg}
    />
  );
};

export default LandingImage;
