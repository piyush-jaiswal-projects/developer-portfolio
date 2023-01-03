import React from "react";

import "./sliding.css";
import pic from "./pic.png";
import AboutBg from "./bg.png";
import gmail from "./mail.svg";
import linkedin from "./linkedin.svg";
import twitter from "./twitter.svg";

function Sliding(){
    return(
        <div className="slide-horizontal">
        <div className="Slider">
        <div className="overlay2">
        <h1 className="sec-title title2">About Me</h1>
        <div className="text-background">
        <h2>
        Hi, I am Piyush Jaiswal. I am an engineering undergrad and a passionate full stack web developer. I love to talk to people. You can ping me at any of my social media handles.
        <br></br>
        <ul>
            <li>No of projects: 10+</li>
            <li>Experience(in yrs): 2+</li>
            <li>Tech Stack: MERN</li>
        </ul>
        </h2>
        <div className="socialmedia-bar">
        <a href="https://www.linkedin.com/in/piyushjaiswal1610/" target="_blank" rel="noreferrer"><img className="social-img" src={linkedin} alt=""></img></a>
        <a href="https://twitter.com/PiyushJ17317768" target="_blank" rel="noreferrer"><img className="social-img" src={twitter} alt=""></img></a>
        <a href="mailto:piyushjaiswalofficial001@gmail.com"><img className="social-img" src={gmail} alt=""></img></a>
        </div>
        </div>
        <div className="image-background">
        <img src={pic} alt="Piyush Jaiswal" className="my-img"></img>
        </div>
        </div>
        <img className="about-bg" src={AboutBg} alt=""></img>
        </div>
        </div>
    );
}

export default Sliding;