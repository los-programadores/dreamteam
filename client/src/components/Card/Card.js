import React, { Component } from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';


function CardComponent(props) {

    console.log("props", props)
    return (
        <div>
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Location: {props.location}
                        <br></br>
                        Expertise: {props.expertise}
                        <br></br>
                        Languages: {props.languages}
                    </Card.Text>
                    <button variant="primary" onClick={props.onClick} id={props.uid}>Hire me for ${props.hourlyRate}/hr.</button>
                </Card.Body>
            </Card>
        </div>


    );

}

export default CardComponent;