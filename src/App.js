import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard';
import Home from './Components/Home/Home';
import UploadSlider from './Components/Admin/Slider/UploadSlider/UploadSlider';
import EditSlider from './Components/Admin/Slider/EditSlider/EditSlider';
import ShowSlider from './Components/Admin/Slider/ShowSlider/ShowSlider';


const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin/dashboard" element={<Dashboard />} />
        <Route path="/admin/dashboard/upload-slider" element={<UploadSlider />} />
        <Route path="/admin/dashboard/edit-slider/:id" element={<EditSlider />} />
        <Route path="/admin/dashboard/show-slider" element={<ShowSlider />} />
      </Routes>
    </>
  );
}

export default App