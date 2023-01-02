import React from "react";

import "./navbar.css";
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Navbar(){
    return(
        <div className="nav">
        <h3 className="nav-link-left">P I Y U S H &nbsp; J A I S W A L</h3>
        <h3 className="nav-link-right right-padding">I</h3>
        <h4 className="nav-link-right underline">LET's TALK</h4>
        {/* <FontAwesomeIcon icon="fa-solid fa-bars" /> */}
        {/* LEARN TO USE FONT AWESOME */}
        </div>
    );
}

export default Navbar;