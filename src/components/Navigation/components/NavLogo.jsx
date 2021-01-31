import React from "react";
import Typography from "@material-ui/core/Typography";
import image from "../../../images/logo/SWMC_round_navy_mobile.png";

const NavLogo = (props) => {
  return (
    <>
      {!props.mobile ? 
        <Typography variant='h2'>SWEETWATER MARINE CONSTRUCTION</Typography>
      :
        <img src={image} alt='Sweetwater Marine Construction'/>
      }
    </>
    
  );
};

export default NavLogo;
