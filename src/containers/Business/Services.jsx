import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import ServiceOptions from "../../components/ServiceOptions/ServiceOptions";
import ServiceTabs from "../../components/ServiceTabs/ServiceTabs";
import { options } from "./options";
import { styles } from "../styles";

const Services = () => {
  return (
    <ContentWrapper style={styles.services}>
      <Grid container item xs={12} justify='center'>
        <ServiceTabs tabs={options} />
        <ServiceOptions options={options} />
      </Grid>
    </ContentWrapper>
  );
};

export default Services;
