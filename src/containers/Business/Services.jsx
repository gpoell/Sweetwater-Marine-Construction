import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import ServiceOptions from "../../components/ServiceOptions/ServiceOptions";
import { options } from "./options";

const Services = () => {
  return (
    <>
      <Grid container item xs={12} justify='center' style={{ marginTop: 60 }}>
        <Typography variant='h3'>What We Do</Typography>
      </Grid>
      <ServiceOptions options={options} />
    </>
  );
};

export default Services;
