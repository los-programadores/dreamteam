import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Landing.css";
import "./LandingBackground.css";
import "../LogIn";
import "../Register";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Modal from '../Modal/index.js';


class Landing extends Component {

    render() {
        return (

            <Container fluid="true" style={{ height: "100vh" }} className="container-fluid">

                <Row className="row">
                    <Col lg={12} className="title">
                        <span className="flow-text">
                            <h4 className="animated pulse delay-1s">
                                Hire anyone in the world, to show you the world.
                        </h4>
                            <p className="grey-text text-darken-3 animated fadeIn delay-2s">
                                Connect with professional translators from all walks of life, united by a shared love of travel.
                        </p>
                        </span>
                    </Col>
                </Row>
                <Row className="row">
                    <Col lg={6} className="flow-text">
                        <Link
                            to="/signup"
                            style={{
                                width: "20%",
                                height: "10%",
                                borderRadius: "50px",
                                letterSpacing: "1%",
                                padding: "2%",
                                fontSize: "80%",
                            }}
                            className="btn btn-large waves-effect waves-light hoverable accent-3"
                        >Register
                            </Link>
                    </Col>
                    <Col lg={6} className="flow-text">
                        <Link
                            to="/LogIn"
                            style={{
                               width: "20%",
                                height: "10%",
                                borderRadius: "50px",
                                letterSpacing: "1%",
                                padding: "2%",
                                fontSize: "80%",
                            }}
                            className="btn btn-large waves-effect waves-light hoverable accent-3 white black-text"
                        > Log In
                            </Link>
                    </Col>
                </Row>
                <Row className="row flow-text">
                    <Col lg={12}>
                        <Modal />
                    </Col>
                </Row>
            </Container>
        );
    }
}
export default Landing;