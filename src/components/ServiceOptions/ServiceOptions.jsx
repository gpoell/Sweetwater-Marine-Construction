import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { styles } from "./styles";

const ServiceOptions = (props) => {
  return (
    <>
      {props.options.map((option, index) => (
        <Grid container item xs={10} sm={6} md={6} lg={4} style={styles.container} key={index}>
          <Card style={styles.card} variant='outlined'>
            <CardMedia
              style={styles.media}
              image={option.image}
              title={option.title}
            />
            <CardContent>
              <Typography variant='h4'>{option.title}</Typography>
              <Typography variant='subtitle2'>
                {option.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  );
};
export default ServiceOptions;
