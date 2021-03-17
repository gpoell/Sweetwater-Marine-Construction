import React, { useState } from "react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import ServicePhotos from "./ServicePhotos";
import { styles } from "./styles";
import "./styles.css";


const ServiceOptions = (props) => {
  const [open, setOpen] = useState(false);
  const [serviceImgs, setServiceImgs] = useState(null);

  const handleOpen = (images) => {
    setServiceImgs(images)
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      {props.options.map((option, index) => (
        <Grid container item xs={12} sm={6} lg={4} style={styles.container} key={index}>
          <Card style={styles.card} variant='outlined' key={index}>
            <CardMedia
              className='card'
              style={styles.media}
              image={option.image}
              title={option.title}
              onClick={() => handleOpen(option.carousel)}
            />
            <CardContent>
              <Typography variant='h4'>{option.title}</Typography>
              <Typography variant='body1'>
                {option.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
      <ServicePhotos open={open} handleClose={handleClose} images={serviceImgs}/>
    </>
  );
};
export default ServiceOptions;
