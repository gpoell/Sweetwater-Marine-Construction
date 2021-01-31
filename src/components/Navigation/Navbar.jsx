import React from "react";
import Grid from "@material-ui/core/Grid";
import NavLogo from "./components/NavLogo";
import NavContact from "./components/NavContact";
import { styles } from "./styles";

const Navbar = (props) => {
  return (
    <>
      <Grid
        container
        item
        xs={12}
        sm={12}
        md={4}
        lg={5}
        xl={4}
        style={styles.container}
        justify='center'
      >
        <NavLogo mobile={props.mobile} />
      </Grid>
      {!props.mobile && 
        <Grid container item md={8} lg={7} xl={8} justify='flex-end'>
          <NavContact mobile={props.mobile} />
        </Grid>
      }
    </>
  );
};

export default Navbar;
