import React from "react";
import Grid from "@material-ui/core/Grid";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import ServiceOptions from "../../components/ServiceOptions/ServiceOptions";
import { options } from "./options";
import { styles } from "../styles";

const Services = () => {
  return (
    <ContentWrapper style={styles.services}>
      <Grid container item xs={12} justify='center'>
        <ServiceOptions options={options} />
      </Grid>
    </ContentWrapper>
  );
};

export default Services;
