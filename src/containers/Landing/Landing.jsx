import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import LandingLogo from "../../components/Landing/LandingLogo";
import LandingImage from "../../components/Landing/LandingImage";
import LandingContent from "../../components/Landing/LandingContent";
import { styles } from "./styles";

const Landing = (props) => {
  return (
    <>
      <Grid container style={styles.container}>
        <LandingImage mobile={props.mobile} />
        <ContentWrapper style={styles.absolute}>
          <LandingLogo mobile={props.mobile} />
          {!props.mobile && <LandingContent />}
        </ContentWrapper>
      </Grid>
      {props.mobile &&
        <ContentWrapper style={styles.mobile}>
          <LandingContent />
        </ContentWrapper>
      }
    </>  
  );
};

export default Landing;
