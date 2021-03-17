import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { styles } from './styles';

const CarouselComponent = React.forwardRef((props, ref) => {
  return (
    <Carousel dynamicHeight infiniteLoop showThumbs={false}>
      {props.images.map((image, index) => (
        <div key={index}>
          <img src={image.src} alt={image.alt} style={styles.image} />
        </div>
      ))}
    </Carousel>
  )
})

export default CarouselComponent;