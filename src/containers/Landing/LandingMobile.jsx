import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import LandingLogo from "../../components/Landing/LandingLogo";
import LandingImage from "../../components/Landing/LandingImage";
import LandingContent from "../../components/Landing/LandingContent";
import mobile from "../../images/background/blue_wave_mobile.png"
import { styles } from "./styles";

const LandingMobile = props => {
  return (
    <ContentWrapper>
      <LandingLogo mobile={props.mobile} />
      <img
        src={mobile}
        alt='Sweetwater Marine Construction'
        style={{ width: "100%" }}
      />
        <ContentWrapper style={styles.mobile}>
          <LandingContent />
        </ContentWrapper>
    </ContentWrapper>
  );
};

export default LandingMobile;
