import React from 'react';
import { Link } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



function Voyages(props) {
    return (
        <Row>
            <Col md={4}>
                <Button variant="primary"><Link to="/voyages">To Voyage</Link></Button>
            </Col>
            <Col>
                Lorem Ipsum
            </Col>
        </Row>

    );
}

export default Voyages;
