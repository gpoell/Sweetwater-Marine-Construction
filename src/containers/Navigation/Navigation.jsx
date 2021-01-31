import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import NavBar from "../../components/Navigation/Navbar";
import { styles } from "../styles";

const Navigation = props => {
  return (
    <ContentWrapper style={styles.navigation}>
      <NavBar mobile={props.mobile} />
    </ContentWrapper>
  );
};

export default Navigation;
