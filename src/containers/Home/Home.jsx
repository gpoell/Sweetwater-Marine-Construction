import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import LandingImage from "../../components/Landing/LandingImage";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import NavBar from "../../components/Navigation/Navbar";
import Services from "../Business/Services";
import Footer from "../Footer/Footer";

const Home = () => {
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState("Home");

  useEffect(() => {
    let browserWidth = window.innerWidth;
    if (browserWidth < 960) {
      setMobile(true);
    }
  }, []);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <NavBar value={value} handleChange={handleChange} />
      <LandingImage />
      <ContentWrapper>
        <Services mobile={mobile} />
      </ContentWrapper>
      <Footer />
    </Grid>
  );
};

export default Home;
