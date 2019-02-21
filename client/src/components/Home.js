import React, { Component } from "react";
import firebaseauth from "../firebase";
import { Link } from "react-router-dom";

import Images from "./Image/Image"
import Voyages from "./Voyages/Voyages";
import YourVoyages from "./YourVoyages/YourVoyages";
import Navbar from "./Navbar"

import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../utils/API";
//css style sheet
import "../styles/Home.css"

class Home extends Component {
  state = { uid: null, userName: null };

  componentDidMount() {
    firebaseauth.auth().onAuthStateChanged(user => {
      this.setState({
        uid: user.uid
      })
      API.getUser(this.state.uid).then(res => this.setState({ userName: res.data.name }))
        .catch(err => console.log(err));
    });
  }

  handleLogOut = () => {
    firebaseauth.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      throw error
    });
  }

  createVoyage = () => {

  }
  render() {
    return (
      <Container className="container">
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
        {console.log(this.state)}
        <Row className="UserProfile">

          <Images></Images>

          <Col>

            <Row>
              <Col>
                <hr></hr>
              </Col>
            </Row>

            <Row>
              <Col>
                <h1>Hello </h1>
              </Col>
            </Row>

            <Row>
              <Col>
                <h3> {this.state.userName} </h3>
              </Col>
            </Row>

            <Row>
              <Col>
                <hr></hr>
              </Col>
            </Row>

          </Col>

          <Col>
            <Row>
              <Col>
                <hr></hr>
              </Col>
            </Row>
            <Row className="createVoyages">
              <Col>
                <Voyages />
              </Col>
            </Row>
            <Row>
              <Col>
                <hr></hr>
              </Col>
            </Row>

          </Col>
        </Row>


        <Row className="yourVoyages">
          <Col>
            <YourVoyages
              time="Past"
            />
          </Col>
          <Col>
            <YourVoyages
              time="Current"
            />
          </Col>
          <Col>
            <YourVoyages
              time="future"
            />
          </Col>
        </Row>
      </Container>



    )
  }
}

export default Home