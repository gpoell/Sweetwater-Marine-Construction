import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import LandingImage from "../../components/Landing/LandingImage";
import LandingContent from "../../components/Landing/LandingContent";

const Landing = (props) => {
  return (
    <ContentWrapper style={{marginTop: 30, marginBottom: 30}}>
      <LandingContent />
      <LandingImage />
    </ContentWrapper>
  );
};

export default Landing;
