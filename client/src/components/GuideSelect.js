import React, { Component } from "react";
import { Link } from "react-router-dom";

import guide from "./guideInfo/guideInfo";
import API from "../utils/API";

import CardComponent from "./Card/Card";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import "../styles/GuideSelect.css";

const guideComponent = guide.map(guideobject => <CardComponent {...guideobject} />)

class Guide extends Component {

    state = {
        id: null,
        guides: {}
    }

    componentDidMount() {
        API.getGuide({}).then(res => {
            console.log(res)

        })
    }


    getGuides = (id) => {
        API.getGuide()
    }

    saveGuides = () => {
        API.saveGuide()

    }


    createVoyage = () => {

    }


    render() {
        return (
            < Row >
                {console.log(this.state)}
                <Col>
                    <Col>
                        <h1 className="text-center">Select your Guide</h1>
                        <hr></hr>
                    </Col>
                    <Col>
                        <Button onClick={this.saveGuides}></Button>
                    </Col>
                    <Col>
                        <Row className="guide">
                            <Col>
                                {guideComponent}
                            </Col>
                        </Row>
                    </Col>
                </Col>
            </Row >
        )
    }
}

export default Guide;