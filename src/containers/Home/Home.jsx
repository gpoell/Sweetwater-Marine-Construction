import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "../../components/Navigation/Navbar";
import LandingPage from "../Landing/LandingPage";

const Home = () => {
  const [mobile, setMobile] = useState(false);
  const [value, setValue] = useState("Home");

  useEffect(() => {
    let browserWidth = window.innerWidth;
    if (browserWidth < 960) {
      setMobile(true);
    }
  }, []);

  return (
    <Grid container>
      <NavBar value={value} />
      {value === "Home" && <LandingPage />}
    </Grid>
  );
};

export default Home;
