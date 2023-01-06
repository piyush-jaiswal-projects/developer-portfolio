import React from "react";
import { saveAs } from "file-saver";

import "./home.css";
import "./background.css";
import video from "./bg.mp4";
import proj from "./project.png";
import file from "./file.png";
import Navbar from "../Navbar/navbar.js";

function Home(){

    function saveFile(){
        saveAs("https://drive.google.com/file/d/1kNH9ITXzMX5jouZQAdKF2-xKLGZ6KDr5/view?usp=sharing", "Resume.pdf");
    }

    function openProjects(){
        window.location.replace("/#projects");
    }

    return(
        <div className="home-div" id="home">
        <div className="overlay">
        <Navbar />
        <h1 className="tagline">
            I build responsive and
            <br></br>secured websites.
        </h1>
        <p className="desc-para">
            Hi, I am Piyush Jaiswal. I can help you to build your website. To connect, click on mail icon at top right corner.
        </p>
        <button className="more-btn" title="See my work" onClick={openProjects}>
        <img src={proj} alt="Projects" className="icon"></img>
        <h4 className="btn-desc">Projects</h4>
        </button>
        <button className="more-btn" title="Download my resume" onClick={saveFile}>
        <img src={file} alt="Resume" className="icon"></img>
        <h4 className="btn-desc">Resume</h4>
        </button>
        <p className="scroll-txt underline2">SCROLL</p>
        </div>
        <video className="bg-video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
    </video>
        </div>
    );
}

export default Home;