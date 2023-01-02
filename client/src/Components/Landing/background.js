import React from "react";

import "./background.css";
import video from "./bg.mp4";

function Background(){
    return(
    <div className="bg-div">
    <video className="bg-video" loop autoPlay muted>
        <source src={video} type="video/mp4" />
    </video>
    </div>
    );
}

export default Background;