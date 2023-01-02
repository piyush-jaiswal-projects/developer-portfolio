import React from "react";

import "./home.css";
import Navbar from "../Navbar/navbar.js";

function Home(){
    return(
        <div className="home-div">
        <Navbar />
        <h1 className="tagline">
            I build intelligent and
            <br></br>impactful websites.
        </h1>
        <p className="desc-para">
        Etiam rhoncus justo non volutpat gravida. Sed convallis, ante vitae mattis pellentesque, dolor nulla malesuada sapien, sed consequat tortor ex id purus. Nunc sapien diam, pellentesque eu volutpat nec, mollis id quam.
        </p>
        <button className="more-btn" title="See my work"> +
        </button>
        <button className="more-btn" title="Download my resume">v
        </button>
        <p className="scroll-txt underline2">SCROLL</p>
        </div>
    );
}

export default Home;