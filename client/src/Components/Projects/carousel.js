import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Card from "./projectCard.js";
import "./carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";

function Carousel(){

    const settings = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true
      };

    return(
        // <div className='car'>
        // {/* <button className="prev-btn"><img src={LeftArrow} alt='Prev' /></button>
        // <button className='next-btn' onClick={nextSlide}><img src={RightArrow} alt='Next' /></button>
        //  */}
        // {/* <div className='carousel-container'>
        // <Slider {...settings}>
        // {/* <div className='item' id="1">
        // <Card />
        // </div>
        // <div className='item active' id="2">
        // <Card />
        // </div>
        // <div className='item' id="3">
        // <Card />
        // </div>
        // <div className='item' id="4">
        // <Card />
        // </div>
        // <div className='item' id="5">
        // <Card />
        // </div> */}
        
        // {/* </div> */} 
        
        // </div>
        <>
        <Slider {...settings}>
        <div>
            <Card />
        </div>
        <div>
            <Card />
        </div>
        <div>
            <Card />
        </div>
        <div>
            <Card />
        </div>
        <div>
            <Card />
        </div>
        </Slider>   
        <br />
        <br />
        <button className='moreproj-btn'>See More Projects</button>
        </>
    );
}

export default Carousel;