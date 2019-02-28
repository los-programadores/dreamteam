import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../../firebase";
import "./LogIn.css";
import "./TravelBackground.css";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



class Login extends Component {
    handleSignUp = async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
            await firebaseauth
                .auth()
                .signInWithEmailAndPassword(email.value, password.value);
            this.props.history.push("/home");
        } catch (error) {
            alert(error);
        }
    };

    render() {
        return (
            <Container fluid className="container">
                <Row className="row">
                    <Col lg={12} className="top"></Col>
                </Row>
                <div className="app">
                    <Row className="row-login">
                        <Col lg={12} className="login">
                            <h4>
                                <b>Login</b> below
                            </h4>
                            <p className="grey-text text-darken-1">
                                Don't have an account?
                            <Link to="/signup">Register</Link>
                            </p>
                        </Col>
                    </Row>

                    <form onSubmit={this.handleSignUp}>

                        <Row className="row">
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
                        </Row>
                        <br />
                        <Row className="row-button">
                            <Col lg={12} className="button">
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

export default withRouter(Login);