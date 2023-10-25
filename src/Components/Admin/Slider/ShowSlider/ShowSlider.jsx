import React, { useState, useEffect } from "react";
import { AxiosBaseUrl } from "../../../../baseUrl";
import { Button, Card, Container } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ShowSlider = () => {
  const [sliders, setSliders] = useState([]);
    const navigate = useNavigate();
    
  const getSlidersData = async () => {
    try {
      const get_SliderData = await AxiosBaseUrl.get("/firstSlider");
      setSliders(get_SliderData.data);
    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSlidersData();
  }, []);

  return (
    <>
      <Container
        fluid
        className="d-flex align-items-center justify-content-around p-3"
      >
        {sliders &&
          sliders.map((sliderItem) => (
            <Card key={sliderItem.id} style={{ width: "18rem" }}>
              <Card.Img variant="top" src={sliderItem.sliderImg} />
              <Card.Body>
                <Card.Title>{sliderItem.sliderTitle}</Card.Title>
                <Card.Text>{sliderItem.sliderDesc}</Card.Text>
                <div className="d-flex justify-content-between align-items-center" >
                          <Button
                              onClick={() => {
                                  navigate(`/admin/dashboard/edit-slider/${sliderItem.id}`);
                              }}
                              style={{ fontSize: '13px' }} className="m-3" variant="primary"> بروز رسانی اسلایدر</Button>
                  <Button style={{fontSize:'13px'}} className="m-3" variant="primary">حذف اسلایدر</Button>
                </div>
              </Card.Body>
            </Card>
          ))}
      </Container>
    </>
  );
};

export default ShowSlider;
