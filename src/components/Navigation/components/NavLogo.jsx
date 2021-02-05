import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import logo from "../../../images/logo/SWMC_round_navy_mobile.png";

const NavLogo = (props) => {
  return (
    <>
      {!props.mobile ? 
        <Typography variant='h2'>SWEETWATER MARINE CONSTRUCTION</Typography>
      :
        <Grid container item xs={12} justify='center'>
          <img src={logo} alt='Sweetwater Marine Construction'/>
        </Grid>
      }
    </>    
  );
};

export default NavLogo;
