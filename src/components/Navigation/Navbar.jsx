import React from "react";
import Grid from "@material-ui/core/Grid";
import NavLogo from "./components/NavLogo";
import NavContact from "./components/NavContact";
import { styles } from "./styles";

const Navbar = (props) => {
  return (
    <>
      {props.mobileSpec > 750 && 
        <Grid container item sm={4} md={4} lg={5} xl={4} style={styles.container}>
          <NavLogo />
        </Grid>    
      }
      <Grid container item xs={10} sm ={8} md={8} lg={7} xl={8} justify='flex-end' style={styles.mobile}>
        <NavContact mobile={props.mobile}/>
      </Grid>
    </>
  );
};

export default Navbar;
