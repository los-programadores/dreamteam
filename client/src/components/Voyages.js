import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebaseauth from "../firebase";
import API from "../utils/API";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
/* global google */

export default class Voyages extends Component {
    state = {
        uid: '',
        chosenLocation: '',
        guides: []
    }
    constructor(props) {
        super(props);
        this.autocompleteInput = React.createRef();
        this.autocomplete = null;
        this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
    }
    componentDidMount() {
        const user = firebaseauth.auth().currentUser.uid;
        this.setState({ uid: user });

        this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
            { "types": ["geocode"] });

        this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
    }
    loadGuides = () => {
        API.getGuide(this.state.chosenLocation)
            .then(res => this.setState({ guides: res.data }))
            .catch(err => console.log(err));

    };



    handlePlaceChanged() {
        const place = this.autocomplete.getPlace();
        this.setState({ chosenLocation: place.vicinity }, function () {
            this.loadGuides();
        });
        console.log(this.state.chosenLocation)
    }

    handleVoyageBuild = event => {
        event.preventDefault();
        const { interests, description, languages } = event.target.elements;
        const voyageData = {
            location: this.state.chosenLocation,
            interests: interests.value,
            description: description.value,
            languages: languages.value
        }
        // console.log(this.state.uid, voyageData);
        API.saveVoyage(this.state.uid, voyageData);
    };
    cardRender(props) {
        const guideElement = (
            <Card style={{ width: '18rem' }}>
                {/* <Card.Img variant="top" src={props.img} /> */}
                <Card.Body>
                    <Card.Title>{props.guide.name}</Card.Title>
                    <Card.Text>
                        Location: {props.guide.location}
                        <br></br>
                        Expertise: {props.guide.expertise}
                    </Card.Text>
                    <Button variant="primary"><Link to="/gchat">Hire me for ${props.hourlyRate}/hr.</Link></Button>
                </Card.Body>
            </Card>
        );
        ReactDOM.render(guideElement, document.getElementById('root'));
    }
    //     {
    //     this.state.guides.map(guide => (
    //         <li key={guide.name}>
    //             {/* <a href={"/books/" + book._id}> */}
    //             <strong>
    //                 {guide.name} by {guide.location}
    //             </strong>
    //             {/* </a> */}
    //         </li>
    //     ))
    // }
    render() {
        return (
            <div>

                <h1 className="text-center">Welcom to the Voyages Page</h1>
                <h2 className="text-center" >build your Voyage Below:</h2>
                <div>
                    <label>Location:
                    <input ref={this.autocompleteInput} id="autocomplete" placeholder="Enter Location"
                            type="text" />
                    </label>
                </div>
                <form onSubmit={this.handleVoyageBuild}>
                    <div>
                        <label>List your interests
                    <input
                                name="interests"
                                type="text"
                                placeholder="separate interests with a comma"
                            />
                        </label>
                    </div>
                    <div>
                        <label>List Support with any languages you'll need
                    <input
                                name="languages"
                                type="text"
                                placeholder="separate languages with a comma"
                            />
                        </label>
                    </div>
                    <div>
                        <label>Describe your expectations for your voyage
                        <br />
                            <textarea cols="50"
                                name="description"
                                placeholder="This will help your guide get a better idea of what to recommend to you to make your voyage as enjoyable as possible."
                            />
                        </label>
                    </div>
                    <div id="root">

                    </div>
                    <button type="submit">Submit Voyage</button>
                </form>
            </div>

        )
    }
}