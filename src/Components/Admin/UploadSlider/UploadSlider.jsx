import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import { global_getBase64 } from "../../../helper";
import { Button } from "react-bootstrap";
import axios from "axios";

const UploadSlider = () => {
  const [sliderImg, setSliderImg] = useState(null);
  const [sliderTitle, setSliderTitle] = useState("");
  const [sliderDesc, setSliderDesc] = useState("");

  const getSliderFile = async (file) => {
    const toBase64 = await global_getBase64(file);
    setSliderImg(toBase64);
  };

  const uploadSlider = async () => {
    const sliderData = {
      sliderImg,
      sliderTitle,
      sliderDesc,
    };
    try {
      await axios.post("http://localhost:4000/firstSlider", sliderData);
    } catch (error) {
      console.log(error.message);
    }
    setSliderImg(null);
    setSliderTitle("");
    setSliderDesc("");
  };

  return (
    <>
      <Form className="w-75 mx-auto p-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>عنوان</Form.Label>
          <Form.Control
            type="text"
            value={sliderTitle}
            onChange={(event) => setSliderTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>توضیحات</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={sliderDesc}
            onChange={(event) => setSliderDesc(event.target.value)}
          />
          <label title="file-upload-label" className="mt-3">
            انتخاب عکس
            <input
              className="d-none"
              title="input-upload"
              onChange={(event) => {
                getSliderFile(event.target.files[0]);
              }}
              type="file"
              name="blog-image"
            />
          </label>
        </Form.Group>
      </Form>
      <Button onClick={uploadSlider} variant="success me-auto">
        بارگذاری اسلایدر
      </Button>
    </>
  );
};

export default UploadSlider;
