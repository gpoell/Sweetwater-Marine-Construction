import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import FooterOne from "../../components/Footer/FooterOne";
import FooterTwo from "../../components/Footer/FooterTwo";
import { styles } from "./styles";

const Footer = () => {
  return (
    <>
      <ContentWrapper style={styles.footerOne}>
        <FooterOne />
      </ContentWrapper>
      <ContentWrapper style={styles.footerTwo}>
        <FooterTwo />
      </ContentWrapper>
    </>
  );
};

export default Footer;
