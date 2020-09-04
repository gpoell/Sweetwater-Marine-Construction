import React from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import { styles } from "./styles";
import Zoom from "@material-ui/core/Zoom";

const ServiceOptions = (props) => {
  return (
    <>
      {props.options.map((option, index) => (
        <Zoom in timeout={index === 0 ? 500 : index * 750} key={index}>
          <Grid container item md={6} lg={4}>
            <Card style={styles.card} className='card'>
              <CardHeader title={option.title} />
              <CardMedia
                style={styles.media}
                image={option.image}
                title={option.title}
              />
              <CardContent>
                <Typography variant='subtitle2'>
                  {option.description}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Zoom>
      ))}
    </>
  );
};
export default ServiceOptions;
