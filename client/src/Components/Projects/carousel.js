import React from 'react';
import "react-multi-carousel/lib/styles.css";
import Card from "./projectCard.js";
import "./carousel.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import w1 from "./media/w1.png";
import w2 from "./media/w2.png";
import w3 from "./media/w3.png";
import w4 from "./media/w4.png";

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

      const settingMedium = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true
      };

      const settingSmall = {
        dots: true,
        speed: 500,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: true,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: true,
        pauseOnHover: true
      };

    return(
        
        <>
        <div className="large">
        <Slider {...settings}>
        <div>
            <Card 
                name="Video Game Streaming Website"
                image={w1}
                github="https://github.com/piyush-jaiswal-projects/client-project-1"
                website="https://symphonious-praline-82b0d6.netlify.app/"
            />
        </div>
        <div>
            <Card 
                name="NVRO NGO Website"
                image={w2}
                github="https://github.com/piyush-jaiswal-projects/client-project-1"
                website="https://symphonious-praline-82b0d6.netlify.app/"
            />
        </div>
        <div>
        <Card 
                name="Cybersecurity Services Startup Website"
                image={w3}
                github="https://github.com/piyush-jaiswal-projects/tech-startup-website"
                website=""
            />
        </div>
        <div>
        <Card 
                name="Digital Marketing Agency Website"
                image={w4}
                github="https://github.com/piyush-jaiswal-projects/digital-marketing-agency-website"
                website=""
            />
        </div>
        </Slider>  
        </div> 

        <div className="medium">
        <Slider {...settingMedium}>
        <div>
            <Card 
                name="Video Game Streaming Website"
                image={w1}
                github="https://github.com/piyush-jaiswal-projects/client-project-1"
                website="https://symphonious-praline-82b0d6.netlify.app/"
            />
        </div>
        <div>
            <Card 
                name="NVRO NGO Website"
                image={w2}
                github="https://github.com/piyush-jaiswal-projects/client-project-1"
                website="https://symphonious-praline-82b0d6.netlify.app/"
            />
        </div>
        <div>
        <Card 
                name="Cybersecurity Services Startup Website"
                image={w3}
                github="https://github.com/piyush-jaiswal-projects/tech-startup-website"
                website=""
            />
        </div>
        <div>
        <Card 
                name="Digital Marketing Agency Website"
                image={w4}
                github="https://github.com/piyush-jaiswal-projects/digital-marketing-agency-website"
                website=""
            />
        </div>
        </Slider>  
        </div> 

        <div className='small'>
        <Slider {...settingSmall}>
        <div>
            <Card 
                name="Video Game Streaming Website"
                image={w1}
                github="https://github.com/piyush-jaiswal-projects/client-project-1"
                website="https://symphonious-praline-82b0d6.netlify.app/"
            />
        </div>
        <div>
            <Card 
                name="NVRO NGO Website"
                image={w2}
                github="https://github.com/piyush-jaiswal-projects/client-project-1"
                website="https://symphonious-praline-82b0d6.netlify.app/"
            />
        </div>
        <div>
        <Card 
                name="Cybersecurity Services Startup Website"
                image={w3}
                github="https://github.com/piyush-jaiswal-projects/tech-startup-website"
                website=""
            />
        </div>
        <div>
        <Card 
                name="Digital Marketing Agency Website"
                image={w4}
                github="https://github.com/piyush-jaiswal-projects/digital-marketing-agency-website"
                website=""
            />
        </div>
        </Slider>
        </div>

        <br />
        <br />
        {/* <button className='moreproj-btn'>See More Projects</button> */}
        </>
    );
}

export default Carousel;