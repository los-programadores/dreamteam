import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../../firebase";
import API from "../../utils/API";
import "../LogIn/LogIn.css";
import "../LogIn/TravelBackground.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
/* global google */


class SignUpGuide extends Component {
  state = {
    location: "",
  }

  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }
  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
      { "types": ["geocode"] });


    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.setState({ location: place.vicinity });
    console.log(this.state.location);
  }

  handleSignUp = async event => {
    event.preventDefault();
    const { email, password, name, languages, expertise, hourlyRate } = event.target.elements;
    try {
      const user = await firebaseauth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      const userData = {
        uid: user.user.uid,
        name: name.value,
        email: email.value,
        location: this.state.location,
        languages: languages.value,
        expertise: expertise.value,
        hourlyRate: hourlyRate.value
      }
      API.saveGuide(userData);
      this.props.history.push("/home-guide");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (

      <Container className="container-mark">
        <Row className="row">
          <Col className="Register">
            <h4>
              <b>Guide Register</b> below
                    </h4>
            <p className="grey-text text-darken-1">
              Already a Guide? <Link to="/loginGuide"> Log in</Link>
            </p>
            <p className="grey-text text-darken-1">
              Need a guide? <Link to="/signup"> Register</Link>
            </p>
          </Col>
        </Row>
        <form onSubmit={this.handleSignUp}>
          <Row className="row">
            <Col className="input-field">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
              />
            </Col>
            <Col className="input-field">
              <input
                name="email"
                type="email"
                placeholder="Email"
              />
            </Col>
          </Row>
          <Row className="row">
            <Col className="input-field">
              <input
                name="password"
                type="password"
                placeholder="Password"
              />
            </Col>
            <Col className="input-field">
              <input
                name="password2"
                type="password"
                placeholder="Confirm Password"
              />
            </Col>
          </Row>
          <Row className="row">
            <Col className="input-field">
              <input
                ref={this.autocompleteInput}
                id="autocomplete"
                name="location"
                type="text"
                placeholder="Where are you located?"
              />
            </Col>
            <Col className="input-field">
              <input
                name="expertise"
                type="text"
                placeholder="Enter your field(s) of expertise"
              />
            </Col>
          </Row>
          <Row className="row">
            <Col className="input-field">
              <input
                name="languages"
                type="text"
                placeholder="What languages are you fluent in?"
              />
            </Col>
            <Col className="input-field">
              <input
                name="hourlyRate"
                type="text"
                placeholder="0.00"
              />
            </Col>
          </Row>
          <Row className="row-button">
            <Col md={12} className="button"></Col>
            <button
              style={{
                width: "15%",
                height: "8%",
                borderRadius: "50px",
                letterSpacing: "1%",
                padding: "2%",
                fontSize: "100%",
              }}
              type="submit"
              className="btn btn-large waves-effect waves-light hoverable blue accent-3"
            >Sign up
                </button>
          </Row>
        </form>
      </Container >
    );
  }
}

export default withRouter(SignUpGuide);