import React from "react";

import "./projects.css";
// import image from "./media/w1.png";
import github from "./media/github.png";
import website from "./media/website.png";

function ProjectCard(props){
    return(
        <div className="pro-card">
            <img src={props.image} alt="Website 1" className="pro-img"></img>
            <h3 className="site-title">{props.name}</h3>
            <ul className="tech-list">Tech Used:
            <li className="tech-item">ReactJS</li>
            <li className="tech-item">NodeJS</li>
            <li className="tech-item">ExpressJS</li>
            <li className="tech-item">MongoDB</li>
            </ul>
            <a href={props.github} target="_blank" rel="noreferrer"><img className="link-img" src={github} alt="Github" title="Source Code"></img></a>
            <a href={props.website} target="_blank" rel="noreferrer"><img className="link-img" src={website} alt="Website" title="Live Website"></img></a>
        </div>
    );
}

export default ProjectCard;