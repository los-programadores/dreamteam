import React, { Component } from "react";
import firebaseauth from "../firebase"
import { Link } from "react-router-dom";


class Guide extends Component {


    createVoyage = () => {

    }
    render() {
        return (
            <div>
                <h1>Select your Guide</h1>
                <button><Link to="/gchat">Select Guide</Link></button>
            </div>
        )
    }
}

export default Guide