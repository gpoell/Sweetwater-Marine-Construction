import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import NavBar from "../../components/Navigation/Navbar";
import { styles } from "../styles";

const Navigation = () => {
  return (
    <ContentWrapper style={styles.navigation}>
      <NavBar />
    </ContentWrapper>
  );
};

export default Navigation;
