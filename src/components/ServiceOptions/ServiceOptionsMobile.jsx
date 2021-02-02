import React from "react";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import { styles } from "./styles";

const ServiceOptionsMobile = (props) => {
  return (
    <>
      {props.options.map((option) => (
        <Paper style={styles.paper} elevation={0}>
          <Grid container style={styles.container}>
            <Grid container item xs={5}>
              <img
                  src={option.image}
                  alt={'option.alt'}
                  style={styles.mobileImage}
                />
            </Grid>
            <Grid container item xs={7} style={{paddingLeft: 20}}>
              <Typography variant='subtitle2'>{option.title}</Typography>
                <Typography variant='subtitle2'>
                  {option.description}
                </Typography>
            </Grid>
          </Grid>
        </Paper>
      ))}
    </>
  );
};

export default ServiceOptionsMobile;
