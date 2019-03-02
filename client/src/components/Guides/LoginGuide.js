import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../../firebase";
import "../LogIn/LogIn.css";
import "../LogIn/TravelBackground.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class LoginGuide extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseauth
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/home-guide");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <Container fluid className="container">
        <Row className="row">
          <Col className="top"></Col>
        </Row>
        <div className="app">
          <Row className="row-login">
            <Col className="login">
              <h4>
                <b>Guide Login</b> below
                            </h4>
              <p className="grey-text text-darken-1">
                Need a guide? <Link to="/login"><b>Login as traveler</b></Link>
              </p>
              <p className="grey-text text-darken-1">
                Looking to become a guide?
                            <Link to="/signupGuide"> Register</Link>
              </p>

            </Col>
          </Row>

          <form onSubmit={this.handleSignUp}>

            <Row className="row">
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
            </Row>
            <br />
            <Row className="row-button">
              <Col className="button">
                <button
                  style={{
                    width: "15%",
                    height: "8%",
                    borderRadius: "50px",
                    letterSpacing: "1%",
                    padding: "2%",
                    paddingBottom: "4%",
                    fontSize: "100%",
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                            </button>
              </Col>
            </Row>
          </form>
        </div>
      </Container>
    )
  }
}

export default withRouter(LoginGuide);