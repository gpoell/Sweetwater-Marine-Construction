import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import NavLogo from "./components/NavLogo";
import NavContact from "./components/NavContact";

const Navbar = () => {
  return (
    <>
      <Grid container item sm={2} md={1} >
        <NavLogo />
      </Grid>
      <Grid container item sm={4} md={5} alignItems='center'>
        <Typography variant='h2'>SWEETWATER MARINE CONSTRUCTION</Typography>
      </Grid>
      <Grid container item sm ={6} md={6} alignItems='center'>
        <NavContact />
      </Grid>
    </>
  );
};

export default Navbar;
