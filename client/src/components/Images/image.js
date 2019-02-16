import React from "react";
import image from "./images/travel_HD.jpg";

function Image(){
    return (
        <div className="header">
            <h1 id="welcome-user">Hello, User</h1>
            <img id="travelImage" src={image} alt= "Travel logo"/>
            <div className="header-text text-center">
            <h1><strong>Bringing the world together one language at a time.</strong></h1>
            <hr></hr>
            <h5>Easily connect with a translator in your area and start exploring the world around you</h5>
            </div>
        </div>
    )
}

export default Image;