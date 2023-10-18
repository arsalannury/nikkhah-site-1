import React from "react";
import Carousel from "react-bootstrap/Carousel";

const FirstSlider = () => {
  return (
    <>
      <Carousel>
        <Carousel.Item>
          <img src="sliderImage1.webp" alt="" 
          className="object-fit-cover w-100" />
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img src="sliderImage2.webp" alt="" 
          className="object-fit-cover w-100" />
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </>
  );
};

export default FirstSlider;
