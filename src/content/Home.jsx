import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import Navigation from "../containers/Navigation/Navigation";
import Landing from "../containers/Landing/Landing"
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
      <Navigation mobile={mobile} />
      <Landing mobile={mobile} />
      <Services mobile={mobile} />
      <Footer />
    </Grid>
  );
};

export default Home;
