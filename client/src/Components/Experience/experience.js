import React from "react";

import Slider from "@mui/material/Slider";

import "./experience.css";
import {ExpCard, ExpCard2, ExpCard3, ExpCard4} from "./expCard.js";

function Experience(){

    const marks = [
        {
          value: 0,
          label: '2023',
        },
        {
          value: 50,
          label: '2022',
        },
        {
          value: 100,
          label: '2021',
        },
      ];

    return(
        <div className="exp-sec" id="experience">
        <h1 className="sec-title">Experience</h1>
        <div className="slider-div">
      <ExpCard
      designation="Backend Developer Intern"
      organization="Design Innovation Centre,PU"
      duration="Nov 2021 - May 2022"
      />
      <ExpCard2
      designation="Web Developer"
      organization="Alumni Affairs Cell,UIET,PU"
      duration="Nov 2021 - Oct 2022"
      />
      <ExpCard3
      designation="Freelance Web Developer"
      organization="Upwork"
      duration="Sept 2022 - Present"
      />
      <ExpCard4
      designation="Web Developer Intern"
      organization="The Sparks Foundation"
      duration="Dec 2022 - Present"
      />
        <Slider
        aria-label="Temperature"
        orientation="vertical"
        defaultValue={0}
        valueLabelDisplay="auto"
        disabled
        marks={marks}
        color="secondary"
      />
      </div>
        </div>
    );

}

export default Experience;