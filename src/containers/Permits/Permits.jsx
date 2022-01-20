import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import PermitsHeader from "../../components/Permits/PermitsHeader";
import PermitsDesc from "../../components/Permits/PermitsDesc";
import PermitsList from "../../components/Permits/PermitsList";

const Permits = () => {
  return (
      <ContentWrapper style={{ marginBottom: 30, marginTop: 30}}>
        <PermitsHeader />
        <PermitsDesc />
        <PermitsList />
      </ContentWrapper>
  );
};

export default Permits;
