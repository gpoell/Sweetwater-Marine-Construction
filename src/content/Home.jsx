import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Navigation from "../containers/Navigation/Navigation";
import LandingImage from "../components/Landing/LandingImage";
import ContentWrapper from "../components/ContentWrapper/ContentWrapper";
import Services from "../containers/Business/Services";
import Footer from "../containers/Footer/Footer";

const Home = () => {
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    let browserWidth = window.innerWidth;
    if (browserWidth < 960) {
      setMobile(true);
    }
  }, []);

  return (
    <Grid container>
      <Navigation />
      <LandingImage />
      <ContentWrapper>
        <Services mobile={mobile} />
      </ContentWrapper>
      <Footer />
    </Grid>
  );
};

export default Home;
