import React from "react";
import Grid from "@material-ui/core/Grid";
import Modal from '@material-ui/core/Modal';
import barge2 from "../../images/templates/barge2.jpg";
import { styles } from "./styles";

const ServicePhotos = props => {  
  return (
    <>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        style={styles.modal}
      >
        <img src={barge2} alt='' />
      </Modal>
    </>
  )
}

export default ServicePhotos;