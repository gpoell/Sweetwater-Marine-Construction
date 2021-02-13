import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import LandingLogo from "../../components/Landing/LandingLogo";
import LandingImage from "../../components/Landing/LandingImage";
import LandingContent from "../../components/Landing/LandingContent";
import { styles } from "./styles";

const LandingMobile = props => {
  return (
    <ContentWrapper>
      <LandingLogo mobile={props.mobile} />
      <LandingImage mobile={props.mobile} />
        <ContentWrapper style={styles.mobile}>
          <LandingContent />
        </ContentWrapper>
    </ContentWrapper>
  );
};

export default LandingMobile;
