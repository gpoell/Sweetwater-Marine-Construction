import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";
import NavBar from "../../components/Navigation/Navbar";

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
      <NavBar />
    </Grid>
  );
};

export default Home;
