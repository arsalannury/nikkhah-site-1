import axios from "axios";
import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";

const FirstSlider = () => {
  const [sliderData, setSliderData] = useState(null);

  const getData = async () => {
    try {
      const service = await axios.get("http://localhost:4000/firstSlider");
      setSliderData(service.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Carousel>
        {sliderData &&
          sliderData.map((data) => (
              <Carousel.Item key={data.id}>
                <img
                  src={data.sliderImg}
                  alt=""
                  className="w-100 object-fit-cover"
                />
                <Carousel.Caption>
                  <h3>{data.sliderTitle}</h3>
                  <p>{data.sliderDesc}</p>
                </Carousel.Caption>
              </Carousel.Item>
          ))}
      </Carousel>
    </>
  );
};

export default FirstSlider;
