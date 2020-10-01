import React from "react";
import ContentWrapper from "../ContentWrapper/ContentWrapper";
import Typography from "@material-ui/core/Typography";
import NavContact from "./components/NavContact";

const NavBar = (props) => {
  return (
    <ContentWrapper>
      <Typography variant='h2'>Sweetwater Marine Construction</Typography>
      <NavContact />
    </ContentWrapper>
  );
};

export default NavBar;
