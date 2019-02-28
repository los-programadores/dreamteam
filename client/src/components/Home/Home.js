import React, { Component } from "react";
import firebaseauth from "../../firebase"
import Images from "../Image/Image";
import Voyages from "../Voyages/Voyages";
import YourVoyages from "../YourVoyages/YourVoyages";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../utils/API";
import Navbar from "../Navbar/Navbar";
import "./Home.css";

class Home extends Component {
  state = { uid: null, userName: null };

  // componentDidMount() {
  //   const user = firebaseauth.auth().currentUser;

  //   // request data about the user from the server
  //   this.setState({
  //     uid: user.uid
  //   });
  //   API.getUser(this.state.uid).then(res => this.setState({ userName: res.data.name }));
  // }

  createVoyage = () => {

  }
  render() {
    return (
      <Container fluid="true" className="container-home">

        <Navbar />

        <Row className="UserProfile">
          <Col lg={12} className="UserImage">
            <Images></Images>
          </Col>
          <Col lg={12} className="UserName">
            <h1>Welcome, </h1>
            <h3 className="animated zoomIn delay-1s">{this.state.userName}</h3>
          </Col>
        </Row>
        <Row className="createVoyages">
          <Col lg={12}>
            <Voyages />
          </Col>
        </Row>
        <Row className="yourVoyages">
          <Col lg={4} className="insert-voyage">
            <YourVoyages
              time="Past"
            />
          </Col>
          <Col lg={4} className="insert-voyage">
            <YourVoyages
              time="Current"

            />
          </Col>
          <Col lg={4} className="insert-voyage">
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