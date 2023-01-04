import React from "react";

import "./experience.css";


function ExpCard(props){
    return(
        <div className="exp-card" id="exp1">
        <h3 className="designation">{props.designation}</h3>
        <p className="duration">{props.organization}<br></br>{props.duration}</p>
        </div>
    );
}

function ExpCard2(props){
    return(
        <div className="exp-card" id="exp2">
        <h3 className="designation">{props.designation}</h3>
        <p className="duration">{props.organization}<br></br>{props.duration}</p>
        </div>
    );
}

function ExpCard3(props){
    return(
        <div className="exp-card" id="exp3">
        <h3 className="designation">{props.designation}</h3>
        <p className="duration">{props.organization}<br></br>{props.duration}</p>
        </div>
    );
}

function ExpCard4(props){
    return(
        <div className="exp-card" id="exp4">
        <h3 className="designation">{props.designation}</h3>
        <p className="duration">{props.organization}<br></br>{props.duration}</p>
        </div>
    );
}

export  {
    ExpCard,
    ExpCard2,
    ExpCard3,
    ExpCard4
};