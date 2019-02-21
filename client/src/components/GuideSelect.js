import React, { Component } from "react";
import firebaseauth from "../firebase"
import { Link } from "react-router-dom";

import guide from "./guideInfo/guideInfo";

import CardComponent from "./Card/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../styles/GuideSelect.css";
const guideComponent = guide.map(guideobject  => <CardComponent {...guideobject}/> )

class Guide extends Component {


    createVoyage = () => {

    }


    render() {
        return (
            <Row>
                <Col>
                    <Col>
                        <h1 className="text-center">Select your Guide</h1>
                        <hr></hr>
                    </Col>
                    <Col>
                        <Row className="guide">
                            <Col>
                                {guideComponent}
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row>
        )
    }
}

export default Guide