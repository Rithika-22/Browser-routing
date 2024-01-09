// Home.js

import React from 'react';
import Navbar from './Navbar';
import './Home.css'; // You can create this CSS file for styling

const Home = () => {
  return (
    <>
      <Navbar />
      <div className='home-container'>
        <h2>Welcome to My Website!</h2>
        <p>This is a sample website displaying the usage of Browser Routing using React</p>
      </div>
    </>
  );
};

export default Home;
