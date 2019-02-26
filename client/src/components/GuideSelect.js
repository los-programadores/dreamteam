import React, { Component } from "react";
import { Link } from "react-router-dom";

import guide from "./guideInfo/guideInfo";
import CardComponent from "./Card/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "../styles/GuideSelect.css";
let guideComponent;

class Guide extends Component {

    state = {
        guides: null
    }

    constructor(props) {
        super(props);
        this.state = { guides: guide };
        this.loadCard()
    }

    loadCard = () => {
        guideComponent = this.state.guides.map(guideobject => <CardComponent {...guideobject} />)
    }




    render() {
        return (
            <Row>
                <Col>
                    <Col>
                        {console.log(this.state.guides)}
                        <h1 className="text-center">Select your Guide</h1>
                        <hr></hr>
                    </Col>
                    <Col>
                        <Row >
                            <Col className="guide">
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