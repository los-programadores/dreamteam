import React, { Component } from "react";
import firebaseauth from "../firebase"
import { Link } from "react-router-dom";
/* global google */

export default class Voyages extends Component {
    state = {
        chosenLocation: '',
    }
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
        this.handleInputChange = this.handleInputChange.bind(this);
    }
    componentDidMount() {
        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
            { "types": ["geocode"] });

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    }


    handlePlaceChanged() {
        const place = this.autocomplete.getPlace();
        this.setState({ chosenLocation: place.formatted_address });
    }


    render() {
        return (
            <div>
                <h1>Welcom to the Voyages Page</h1>
                <h2>build your Voyage Below:</h2>
                <input ref={this.autocompleteInput} id="autocomplete" placeholder="Enter Location"
                    type="text"></input>
                <h2>{this.state.chosenAddress}</h2>
                <button><Link to="/guides">Submit Voyage</Link></button>
            </div>

        )
    }
}