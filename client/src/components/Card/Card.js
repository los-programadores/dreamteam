import React, { Component} from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
// import Carousel from 'react-bootstrap/Carousel';


function CardComponent(props){
    

        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title>{props.name}</Card.Title>
                    <Card.Text>
                        Location: {props.location}
                        <br></br>
                        Expertise: {props.expertise}
                    </Card.Text>
                    <Button variant="primary"><Link to="/gchat">Hire me for ${props.hourlyRate}</Link></Button>
                </Card.Body>
            </Card>

                        
    );

}

export default CardComponent;