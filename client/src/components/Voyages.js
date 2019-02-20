import React, { Component } from "react";
import firebaseauth from "../firebase"
import { Link } from "react-router-dom";


class Voyages extends Component {


    createVoyage = () => {

    }
    render() {
        return (
            <div>
                <h1>Welcome To Voyages Page</h1>
                <button><Link to="/guides">Submit Voyage</Link></button>
            </div>

        )
    }
}

export default Voyages