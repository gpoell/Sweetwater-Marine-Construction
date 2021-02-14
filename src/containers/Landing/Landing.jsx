import React from "react";
import LandingMobile from "./LandingMobile";
import LandingDesktop from "./LandingDesktop";

const Landing = props => {
  const { mobile } = props;
  return mobile ? <LandingMobile mobile={mobile} /> : <LandingDesktop mobile={mobile} />
}

export default Landing;