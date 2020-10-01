import React from "react";
import landing from "../../images/templates/lake1.1.jpg";
import { styles } from "./styles";

const LandingImage = (props) => {
  return (
    <img
      src={props.mobile ? landing : landing}
      alt='Charlotte North Carolina Dock Repairs'
      style={styles.photo}
    />
  );
};

export default LandingImage;
