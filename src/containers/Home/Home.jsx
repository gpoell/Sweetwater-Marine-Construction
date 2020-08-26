import React, { useEffect, useState } from "react";
import Grid from "@material-ui/core/Grid";

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
      <h1>Placeholder</h1>
    </Grid>
  );
};

export default Home;
