import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

import "./App.css";

const App = () => {
  return (
   <BrowserRouter>
    <Routes>
        <Route path='/' element={<Navbar />} />
        <Route path='/home' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contact' element={<Contact />} />
    </Routes>
   </BrowserRouter>
  );
};

export default App;