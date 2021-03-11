import React,{ useEffect, useState } from 'react';
import '../stylesheets/Home.css';


const  Home = () => {
  return (
    <div className="Home">
      <h3 className="app-heading mb-5 mt-4 fw-bolder">
       Welcome to scheduler 
      </h3>
      <img className="img-responsive" height="500px" weight="500px" src="/schedule.jpg"/>
    </div>
  );
}

export default Home;
