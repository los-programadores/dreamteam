import React, { Component } from "react";
import { Link } from "react-router-dom";
import firebaseauth from "../../firebase";
import API from "../../utils/API";
import CardComponent from '../Card/Card';
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from 'react-bootstrap/Form';
import "./voyagePage.css";
import "./VoyagesPagebackground.css";
import NavBar from "../Navbar/index"

/* global google */

let guideComponent;

export default class Voyages extends Component {
    state = {
        uid: '',
        chosenLocation: '',
        guides: [],
        guideID: ''
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

    guideChosen = (e) => {
        console.log('we got there')
        this.setState({ guideID: e.target.id }, function () {
            console.log(this.state);
        })
    }

    handlePlaceChanged() {
        const place = this.autocomplete.getPlace();
        this.setState({ chosenLocation: place.vicinity }, function () {
            this.loadGuides();
        });
        guideComponent = this.state.guides.map(guideobject => <CardComponent {...guideobject} onClick={this.guideChosen} />)
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
            <Container className="voyagePage" fluid="true">
                <NavBar></NavBar>
                <hr></hr>

                <Row>
                    <Col className="header">
                        <h1 className="heading text-center">Create your Voyage</h1>
                        {/* <h2 className="text-center" >build your Voyage Below:</h2> */}
                    </Col>
                </Row>
                <br></br>

                <Row>
                    <Col className="text-center formDiv" md="auto">

                        <Row>
                            <Col>
                                <label><b>Location:</b>
                                    <input ref={this.autocompleteInput} id="autocomplete" placeholder="Enter Location"
                                        type="text" />
                                </label>
                            </Col>
                        </Row>

                        <Form onSubmit={this.handleVoyageBuild}>
                            <Form.Group>
                                <Form.Label><b>List your interests:</b>
                                    <input
                                        name="interests"
                                        type="text"
                                        placeholder="separate interests with a comma"
                                    />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><b>List Support with any languages you'll need:</b>
                                    <input
                                        name="languages"
                                        type="text"
                                        placeholder="separate languages with a comma"
                                    />
                                </Form.Label>
                            </Form.Group>
                            <Form.Group>
                                <Form.Label><b>Describe your expectations for your voyage:</b>
                                    <br />
                                    <textarea cols="50"
                                        name="description"
                                        placeholder="This will help your guide get a better idea of what to recommend to you to make your voyage as enjoyable as possible."
                                    />
                                </Form.Label>
                            </Form.Group>

                            <button className="btn btn-large waves-effect hoverable accent-1" id="submitbtn" type="submit">Submit Voyage</button>

                        </Form>
                    </Col>
                    <Col md="auto">
                        {guideComponent}
                    </Col>

                </Row>
            </Container>

        )
    }
}