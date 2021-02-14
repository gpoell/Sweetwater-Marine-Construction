import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import LandingLogo from "../../components/Landing/LandingLogo";
import LandingImage from "../../components/Landing/LandingImage";
import LandingContent from "../../components/Landing/LandingContent";
import { styles } from "./styles";

const LandingDesktop = props => {
  return (
    <Grid container style={styles.container}>
        <LandingImage mobile={props.mobile} />
        <ContentWrapper style={styles.absolute}>
          <LandingContent />
        </ContentWrapper>
    </Grid>
  );
};

export default LandingDesktop;
