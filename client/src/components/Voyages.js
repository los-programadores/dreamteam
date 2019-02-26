import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebaseauth from "../firebase";
import API from "../utils/API";
import CardComponent from './Card/Card';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form'
/* global google */

let guideComponent;

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
        guideComponent = this.state.guides.map(guideobject => <CardComponent {...guideobject} />)
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

    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <h1 className="text-center">Welcome to the Voyages Page</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className="text-center" >build your Voyage Below:</h2>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <label>Location:
                    <input ref={this.autocompleteInput} id="autocomplete" placeholder="Enter Location"
                                type="text" />
                        </label>
                    </Col>
                </Row>
                <Row>
                    <Col md="auto">


                        <Form onSubmit={this.handleVoyageBuild}>
                            <Form.Group>
                                <Form.Label>List your interests
                            <input
                                        name="interests"
                                        type="text"
                                        placeholder="separate interests with a comma"
                                    />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>List Support with any languages you'll need
                    <input
                                        name="languages"
                                        type="text"
                                        placeholder="separate languages with a comma"
                                    />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label>Describe your expectations for your voyage
                        <br />
                                    <textarea cols="50"
                                        name="description"
                                        placeholder="This will help your guide get a better idea of what to recommend to you to make your voyage as enjoyable as possible."
                                    />
                                </Form.Label>
                            </Form.Group>

                            <button type="submit">Submit Voyage</button>
                        </Form>
                    </Col>
                    <Col md="auto">
                        <div id="root">
                            {guideComponent}
                        </div>
                    </Col>

                </Row>
            </Container>

        )
    }
}