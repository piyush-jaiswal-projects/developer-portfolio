import React from 'react';

import Card from "./projectCard.js";
import "./carousel.css";
import RightArrow from "./media/arrow-right-solid.svg";
import LeftArrow from "./media/arrow-left-solid.svg";

function Carousel(){

    function nextSlide(){

    }

    return(
        <div className='car'>
        <button className="prev-btn"><img src={LeftArrow} alt='Prev' /></button>
        <button className='next-btn' onClick={nextSlide}><img src={RightArrow} alt='Next' /></button>
        <div className='carousel-container'>
        <div className='item' id="1">
        <Card />
        </div>
        <div className='item active' id="2">
        <Card />
        </div>
        <div className='item' id="3">
        <Card />
        </div>
        <div className='item' id="4">
        <Card />
        </div>
        <div className='item' id="5">
        <Card />
        </div>
        </div>
        </div>
    );
}

export default Carousel;