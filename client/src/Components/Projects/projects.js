import React from "react";

import "./projects.css";
// import Card from "./projectCard.js";
import Carousel from "./carousel.js";


function Projects(){


    return(
        <div id="projects">
        <h1 className="sec-title">Featured Work</h1>
        <p className="project-tagline">
        Explore some of my latest website projects. Non suscipit ex blandit vitae. Pellentesque vel urna id massa sagittis luctus. Fusce condimentum nisi nec nibh scelerisque iaculis.
        </p>
        <div className="proj-carousel slide-up">
        <Carousel />
        </div>
        </div>
    );
}

export default Projects;