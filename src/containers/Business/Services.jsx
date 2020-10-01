import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ContentWrapper from "../../components/ContentWrapper/ContentWrapper";
import ServiceOptions from "../../components/ServiceOptions/ServiceOptions";
import { options } from "./options";
import { styles } from "../styles";

const Services = () => {
  return (
    <ContentWrapper style={styles.services}>
      <Grid container item xs={12} justify='center'>
        <Typography variant='h3'>How Can We Help?</Typography>
      </Grid>
      <Grid container item xs={12} justify='center'>
        <ServiceOptions options={options} />
      </Grid>
    </ContentWrapper>
  );
};

export default Services;
