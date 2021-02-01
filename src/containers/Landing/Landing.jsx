import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import LandingImage from "../../components/Landing/LandingImage";
import LandingContent from "../../components/Landing/LandingContent";

const Landing = (props) => {
  return (
    <>
      {props.mobile ?
        <ContentWrapper style={{ paddingTop: 20, paddingBottom: 20 }}>
          <LandingContent />
        </ContentWrapper>
        :
        <ContentWrapper style={{ paddingTop: 60, paddingBottom: 60 }}>
          <LandingContent />
          <LandingImage />
        </ContentWrapper>
      }
    </>
  );
};

export default Landing;
