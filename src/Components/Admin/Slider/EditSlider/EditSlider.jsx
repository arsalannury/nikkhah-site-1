import React, { useState, useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { global_getBase64 } from "../../../../helper";
import { AxiosBaseUrl } from "../../../../baseUrl";
import { useParams,useNavigate } from "react-router-dom";

const EditSlider = () => {
  const [editSliderImg, setEditSliderImg] = useState(null);
  const [editSliderTitle, setEditSliderTitle] = useState("");
  const [editSliderDesc, setEditSliderDesc] = useState("");

  const [editSliderImgName, setEditSliderImgName] = useState("");
  const [loading, setLoading] = useState(false);

  const params = useParams();
  const navigate = useNavigate();

  const getSliderFile = async (file) => {
    const toBase64 = await global_getBase64(file);
    setEditSliderImgName(file);
    setEditSliderImg(toBase64);
  };

  const submitEditSliderData = async () => {
  console.log(editSliderImg);
    try {
      setLoading(true);
      await AxiosBaseUrl.put(`/firstSlider/${params.id}`, {
        sliderImg: editSliderImg,
        sliderTitle: editSliderTitle,
        sliderDesc: editSliderDesc,
      });
      setLoading(false);
     window.history.back(-1);
    } catch (error) {
      alert(error.message);
      setLoading(false);
    }
  };

  const getSliderDataById = async () => {
    try {
      const slider = await AxiosBaseUrl.get(`/firstSlider/${params.id}`);
      setEditSliderTitle(slider.data.sliderTitle);
      setEditSliderDesc(slider.data.sliderDesc);

      const file = new File([
        new Blob([slider.data.sliderImg])
      ], 'sliderImage');
      
      setEditSliderImg(file);
      setEditSliderImgName(file);

    } catch (error) {
      console.log(error.message);
    }
  };

  useEffect(() => {
    getSliderDataById();
  }, []);

  return (
    <>
      <Form className="w-75 mx-auto p-5">
        <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
          <Form.Label>عنوان</Form.Label>
          <Form.Control
            type="text"
            value={editSliderTitle}
            onChange={(event) => setEditSliderTitle(event.target.value)}
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
          <Form.Label>توضیحات</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            value={editSliderDesc}
            onChange={(event) => setEditSliderDesc(event.target.value)}
          />
          <div>
            <span className="ms-3">عنوان عکس:</span>
            <label
              title="file-upload-label"
              className="mt-3 p-3 rounded border border-secondary"
            >
              {editSliderImgName ? editSliderImgName.name : "انتخاب عکس"}
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
          </div>
        </Form.Group>
      </Form>
      <Button
        disabled={loading}
        type="button"
        onClick={submitEditSliderData}
        variant="success me-5"
      >
        {loading ? "---" : " بروز رسانی اسلایدر"}
      </Button>
    </>
  );
};

export default EditSlider;
