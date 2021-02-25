import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import FooterTwo from "../../components/Footer/FooterTwo";
import { styles } from "./styles";

const Footer = () => {
  return (
    <>
      <ContentWrapper style={styles.footerTwo}>
        <FooterTwo />
      </ContentWrapper>
    </>
  );
};

export default Footer;
