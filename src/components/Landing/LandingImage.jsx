import React from "react";
import Zoom from "@material-ui/core/Zoom";
import landing from "../../images/templates/lake1.jpg";
import { styles } from "./styles";

const LandingImage = () => {
  return (
    <>
      <Zoom in timeout={750}>
        <img src={landing} alt='Kelsey and Garrett' style={styles.photo} />
      </Zoom>
    </>
  );
};

export default LandingImage;
