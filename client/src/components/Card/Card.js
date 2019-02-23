import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';



function CardComponent(props) {

    const guideSelected = () => {
        console.log("this")
    }
    return (
        <Col md={3}>
            <Card id={props.id} style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Location: {props.location}
                        <br></br>
                        Expertise: {props.expertise}
                    </Card.Text>
                    <Button variant="primary" ><Link to="/gchat">Hire me for ${props.hourlyRate}/hr.</Link></Button>
                </Card.Body>
            </Card>
        </Col>


    );

}

export default CardComponent;