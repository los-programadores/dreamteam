import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Voyages(props) {
    return (
        <Row>
            <Col>
                Start your trip by creating you voyage and selecting you tour guide
            </Col>
            <Col md={4}>
                <Button variant="primary"><Link to="/voyages">Create Voyage</Link></Button>
            </Col>
        </Row>

    );
}

export default Voyages;
