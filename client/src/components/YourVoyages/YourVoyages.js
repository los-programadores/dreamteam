import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function Voyages(props) {
    return (
        <div className="yourVoyages">
            <Row>
                <Col lg={4} className="voyages-time">
                    {props.time}
                </Col>
            </Row>

            <Row>
                <Col lg={4} className="voyages-data">
                    Insert Voyages Here
                </Col>
            </Row>
        </div>
    );
}

export default Voyages;