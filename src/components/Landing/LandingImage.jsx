import React from "react";
import landing from "../../images/templates/lake1.1.jpg";
import { styles } from "./styles";

const LandingImage = () => {
  return <img src={landing} alt='Kelsey and Garrett' style={styles.photo} />;
};

export default LandingImage;
