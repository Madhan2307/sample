import React, { useState } from 'react'
import "./Home.scss"
import img from "./Images/download.jpg"
import { TbGardenCartFilled } from "react-icons/tb";
import 'bootstrap/dist/css/bootstrap.min.css';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function Home() {
  return (
    <div>
      <div>
        <h1 className='home'>home</h1>
        <a href='/enterpage'>
          <button>go enter</button>
        </a>
      </div>
      <div>
        <div className='all'>
          <h1>hllo</h1>
          <h2>new</h2>
          <img src={img} /><br /><TbGardenCartFilled />
        </div>
      </div>
      <div className='box'></div>
      <div className='rotate'></div>
      <div className='colorchange'></div>
    </div>
  )
}

export default Home