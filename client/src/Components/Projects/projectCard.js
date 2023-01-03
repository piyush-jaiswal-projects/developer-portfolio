import React from "react";

import "./projects.css";
import image from "./media/w1.png";
import github from "./media/github.png";
import website from "./media/website.png";

function ProjectCard(){
    return(
        <div className="pro-card">
            <img src={image} alt="Website 1" className="pro-img"></img>
            <h3 className="site-title">Video Game Streaming Website</h3>
            <ul className="tech-list">Tech Used:
            <li className="tech-item">ReactJS</li>
            <li className="tech-item">NodeJS</li>
            <li className="tech-item">ExpressJS</li>
            <li className="tech-item">MongoDB</li>
            </ul>

            <a href="https://github.com/piyush-jaiswal-projects/client-project-1" target="_blank" rel="noreferrer"><img className="link-img" src={github} alt="Github" title="Source Code"></img></a>
            <a href="https://symphonious-praline-82b0d6.netlify.app/" target="_blank" rel="noreferrer"><img className="link-img" src={website} alt="Website" title="Live Website"></img></a>
        </div>
    );
}

export default ProjectCard;