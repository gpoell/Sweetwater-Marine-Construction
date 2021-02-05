import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import LandingImage from "../../components/Landing/LandingImage";
import LandingContent from "../../components/Landing/LandingContent";

const Landing = (props) => {
  return (
    <Grid style={{ position: "relative" }}>
      <LandingImage mobile={props.mobile} />
      <ContentWrapper style={{ position: "absolute", top: "20%" }}>
        <LandingContent mobile={props.mobile} />
      </ContentWrapper>
    </Grid>
  );
};

export default Landing;
