import React from 'react';
import { Link } from "react-router-dom";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Voyages(props) {
    return (
        <Row>
            <Col lg={8} className="voyage-text">
                The first step in your adventure begins with creating your voyage.
            </Col>
            <Col lg={4} className="flow-text">
                <Link
                    to="/voyages"
                    style={{
                        width: "11em",
                        height: "3.5em",
                        borderRadius: "50px",
                        letterSpacing: "1px",
                        padding: "1em",
                        fontSize: "0.8em",
                    }}
                    className="btn btn-large waves-effect hoverable accent-1"
                >Create Voyage
                </Link>
            </Col>
        </Row>

    );
}

export default Voyages;
