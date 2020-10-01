import React from "react";
import Grid from "@material-ui/core/Grid";
import LandingImage from "../../components/Landing/LandingImage";

const Landing = (props) => {
  return (
    <Grid style={{ position: "relative" }}>
      <LandingImage mobile={props.mobile} />
      {/* <ContentWrapper style={{ position: "absolute", top: "45%" }}>
        <LandingPage mobile={props.mobile} />
      </ContentWrapper> */}
    </Grid>
  );
};

export default Landing;
