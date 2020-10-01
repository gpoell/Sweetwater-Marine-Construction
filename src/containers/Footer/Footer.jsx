import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import FooterOne from "../../components/Footer/FooterOne";
import FooterTwo from "../../components/Footer/FooterTwo";

const Footer = () => {
  return (
    <>
      <ContentWrapper
        style={{
          backgroundColor: "#f6f6f6",
          paddingTop: 60,
          paddingBottom: 60,
        }}
      >
        <FooterOne />
      </ContentWrapper>
      <ContentWrapper
        style={{
          backgroundColor: "#00004d",
        }}
      >
        <FooterTwo />
      </ContentWrapper>
    </>
  );
};

export default Footer;
