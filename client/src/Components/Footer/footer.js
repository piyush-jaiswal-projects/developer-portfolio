import React from "react";

import "./footer.css";
import linkedin from "../Sliding/linkedin.svg";
import twitter from "../Sliding/twitter.svg";
import gmail from "../Sliding/mail.svg";

function Footer(){
    return(
        <div className="foot-section" id="contact">
        <div className="top-left left">
        <h4 className="contact-me">Contact me here:</h4>
        <a href="https://www.linkedin.com/in/piyushjaiswal1610/" target="_blank" rel="noreferrer"><img className="social-nav-img" src={linkedin} alt=""></img></a>
        <a href="https://twitter.com/PiyushJ17317768" target="_blank" rel="noreferrer"><img className="social-nav-img" src={twitter} alt=""></img></a>
        <a href="mailto:piyushjaiswalofficial001@gmail.com"><img className="social-nav-img" src={gmail} alt=""></img></a>
        </div>
        <div className="top-right">
        <h4 className="email grey">piyushjaiswalofficial001@gmail.com
        <br></br>
        <br></br>
        Chandigarh, India
        </h4>
        </div>
        <div className="bottom-div">
        <h3>Copyright Piyush Jaiswal.
        <br></br>
        All Rights reserved.</h3>
        </div>
        </div>
    );
}

export  default Footer;