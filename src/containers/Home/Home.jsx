import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import NavBar from "../../components/Navigation/Navbar";
import LandingPage from "../Landing/LandingPage";
import Services from "../Services/Services";

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
      <ContentWrapper>
        {value === "Home" && <LandingPage />}
        {value === "Services" && <Services mobile={mobile} />}
      </ContentWrapper>
    </Grid>
  );
};

export default Home;
