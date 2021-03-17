import React from "react";
import Modal from '@material-ui/core/Modal';
import { styles } from "./styles";
import CarouselComponent from "../Carousel/CarouselComponent";

const ServicePhotos = props => {  
  return (
    <Modal
      open={props.open}
      onClose={props.handleClose}
      style={styles.modal}
      aria-labelledby="Sweetwater Marine Construction"
      aria-describedby="Sweetwater Marine Construction"
    >
      <CarouselComponent images={props.images} />
    </Modal>
  )
}

export default ServicePhotos;