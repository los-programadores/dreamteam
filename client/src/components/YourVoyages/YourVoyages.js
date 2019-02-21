import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function Voyages(props) {
    return (
        <div className="yourVoyages">
            <Row>
                <Col> {props.time} </Col>
                <hr></hr>
            </Row>

            <Row className="voyages-data"> Your Voyages are going here </Row>
        </div>
    );
}

export default Voyages;
