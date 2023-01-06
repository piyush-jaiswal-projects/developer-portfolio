import React from "react";

import "./navbar.css";
import Menu from "./bars-solid.svg";
import gmail from "../Sliding/mail.svg";
import linkedin from "../Sliding/linkedin.svg";
import twitter from "../Sliding/twitter.svg";
import cross from "./circle-xmark-solid.svg";
// import call from "./call.svg";

function Navbar(){
    
    
    function openNavigation(){
        document.getElementById("menu").style.display="block";
    }

    function closeNavigation(){
        document.getElementById("menu").style.display="none";
    }

    return(
        <div className="nav">
        <div className="overlay-menu" id="menu">
        <img src={cross} className="nav-link-right custom-space menu-img" alt="Close" onClick={closeNavigation}></img>
        <div className="link-bar">
        <a href="#home" className="menu-link" onClick={closeNavigation}><h1>HOME</h1></a>
        <a href="#projects" className="menu-link" onClick={closeNavigation}><h1>PROJECTS</h1></a>
        <a href="#about" className="menu-link" onClick={closeNavigation}><h1>ABOUT</h1></a>
        <a href="#experience" className="menu-link" onClick={closeNavigation}><h1>EXPERIENCE</h1></a>
        <a href="#contact" className="menu-link" onClick={closeNavigation}><h1>CONTACT</h1></a>
        </div>
        <div className="overlay-contact">
        <h4 className="email">piyushjaiswalofficial001@gmail.com
        <br></br>
        <br></br>
        Chandigarh, India
        <div className="socialmedia-navbar">
        <a href="https://www.linkedin.com/in/piyushjaiswal1610/" target="_blank" rel="noreferrer"><img className="social-nav-img" src={linkedin} alt=""></img></a>
        <a href="https://twitter.com/PiyushJ17317768" target="_blank" rel="noreferrer"><img className="social-nav-img" src={twitter} alt=""></img></a>
        <a href="mailto:piyushjaiswalofficial001@gmail.com"><img className="social-nav-img" src={gmail} alt=""></img></a>
        </div>
        </h4>
        </div>
        </div>
        <h3 className="nav-link-left">P I Y U S H &nbsp; J A I S W A L</h3> 
        <img src={Menu} className="nav-link-right right-padding menu-img" alt="Menu" onClick={openNavigation}></img>
        <a href="mailto:piyushjaiswalofficial001@gmail.com">
        {/* <h4 className="nav-link-right underline">LET's TALK</h4> */}
        <img src={gmail} className="nav-link-right right-padding menu-img" alt="Menu"></img>
        </a>
        </div>
    );
}

export default Navbar;