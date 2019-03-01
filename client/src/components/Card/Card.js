import React from 'react';
import { Link } from "react-router-dom";
import Card from 'react-bootstrap/Card';
import "../../styles/cardStyle.css"


function CardComponent(props) {


    console.log("props", props)
    return (
        <div>
            <Card style={{
                width: '18rem',
                borderRadius: "25px",
                background: "rgba(255, 255, 255, 0.5)",
                border: "2px black solid",
                boxShadow: "3px 3px black"
            }}>
                <Card.Img variant="top" src={props.img} />
                <Card.Body>
                    <Card.Title><b>{props.name}</b></Card.Title>
                    <Card.Text>
                        <b>Location</b>: {props.location}
                        <br></br>
                        <b>Expertise</b>: {props.expertise}
                        <br></br>
                        <b>Languages</b>: {props.languages}
                    </Card.Text>
                    <button style={{
                        width: "11em",
                        height: "3.5em",
                        borderRadius: "50px",
                        padding: "5px",
                        letterSpacing: " 1px",
                    }} variant="primary" onClick={props.onClick} id={props.uid}>Hire me for ${props.hourlyRate}/hr.</button>
                </Card.Body>
            </Card>
        </div >

    );

}

export default CardComponent;