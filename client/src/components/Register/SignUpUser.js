import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../../firebase";
import API from "../../utils/API";
import "./SignUpUser.css";
import "./TravelBackground.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


class SignUpUser extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    try {
      const user = await firebaseauth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/home");
      const userData = {
        uid: user.user.uid,
        name: name.value,
        email: email.value,

      }
      API.saveUser(userData);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (

      <Container className="container-mark">
        <Row className="row">
          <Col lg={12} className="Register">
            <h4>
              <b>Register</b> below
                    </h4>
            <p className="grey-text text-darken-1">
              Already have an account? <Link to="/login">Log in</Link>
            </p>
          </Col>
        </Row>
        <form onSubmit={this.handleSignUp}>
          <Row className="row">
            <Col lg={6} className="input-field">
              <input
                name="name"
                type="text"
                placeholder="Full Name"
              />
            </Col>
            <Col lg={6} className="input-field">
              <input
                name="email"
                type="email"
                placeholder="Email"
              />
            </Col>
          </Row>
          <Row className="row">
            <Col lg={6} className="input-field">
              <input
                name="password"
                type="password"
                placeholder="Password"
              />
            </Col>
            <Col lg={6} className="input-field">
              <input
                name="password2"
                type="password"
                placeholder="Confirm Password"
              />
            </Col>
          </Row>
          <Row className="row-button">
            <Col lg={12} className="button"></Col>
            <button
              style={{
                width: "10em",
                height: "4em",
                borderRadius: "50px",
                letterSpacing: "1px",
                padding: "1em",
                fontSize: "1em",
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

export default withRouter(SignUpUser);