import React, { Component } from "react";
import firebaseauth from "../firebase"
import { Link } from "react-router-dom";
import CardComponent from "./Card/Card";
import "../styles/GuideSelect.css";
import guide from "./guideInfo/guideInfo";
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
{console.log(guide)}
const guideComponent = guide.map(guideobject  => <CardComponent {...guideobject}/> )
class Guide extends Component {


    createVoyage = () => {

    }


    render() {
        return (
            <div className="guide">
                <h1 className="text-center">Select your Guide</h1>
                <hr></hr>
                <Row>
                    <Col>
                        {guideComponent}
                    </Col>
                </Row>
            </div>
        )
    }
}

export default Guide