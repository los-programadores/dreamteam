import React from 'react';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";




function Voyages(props) {
    return (
        <div className="yourVoyages" style={{ overflow: "auto", height: "200px" }}>
            <Row className="voyages-data">
                <Col style={{ display: "inline" }}>
                    {props.voyage}
                </Col>
            </Row>
        </div>
    );
}

export default Voyages;