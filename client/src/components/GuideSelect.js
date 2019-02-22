import React, { Component } from "react";
import { Link } from "react-router-dom";
import CarouselComponent from "./Carousel/CarouselComponent";
import "../styles/GuideSelect.css"


class Guide extends Component {


    createVoyage = () => {

    }
    render() {
        return (
            <div className="guide">
                <h1>Select your Guide</h1>
                <CarouselComponent />
                <button><Link to="/gchat">Select Guide</Link></button>


            </div>
        )
    }
}

export default Guide