import React from "react";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import DockDesignHeader from "../../components/DockDesign/DockDesignHeader"
import DockDesignDesc from "../../components/DockDesign/DockDesignDesc"
import DockDesignList from "../../components/DockDesign/DockDesignList"
import { styles } from "../styles";

const DockDesign = props => {
  const { mobile } = props;
  return (
      <ContentWrapper style={styles.dockDesign}>
        <DockDesignHeader />
        <DockDesignDesc mobile={mobile}/>
        <DockDesignList />
      </ContentWrapper>
  );
};

export default DockDesign;
