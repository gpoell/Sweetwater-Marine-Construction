import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import Navbar from "../../components/Navigation/Navbar";
import NavBar from "../../components/Navigation/Navbar";
import NavBarMobile from "../../components/Navigation/NavbarMobile";
import { styles } from "../styles";

const Navigation = props => {
  const { mobile } = props;
  return (
    <ContentWrapper style={styles.navigation}>
      {mobile ? <NavBarMobile /> : <NavBar />}
    </ContentWrapper>
  );
};

export default Navigation;
