import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './Components/Admin/Dashboard';
import Home from './Components/Home/Home';


const App = () => {
  return (
      <>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/admin/dashboard' element={<Dashboard />} />
      </Routes>
      </>
  )
}

export default App