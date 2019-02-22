import React, { Component } from "react";
import firebaseauth from "../../firebase"
import Images from "../Image/Image"
// import Voyages from "../Voyages/Voyages";
import YourVoyages from "../YourVoyages/YourVoyages";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../utils/API";
//css style sheet
import "../../styles/Home.css"

class GuideHome extends Component {
  state = { uid: "", userName: "" };

  componentDidMount() {
    firebaseauth.auth().onAuthStateChanged(user => {
      this.setState({
        uid: user.uid
      })
      API.getGuide(this.state.uid).then(res => this.setState({ userName: res.data.name }));
    });
  }

  handleLogOut = () => {
    firebaseauth.auth().signOut()
  };

  render() {
    return (
      <Container className="container">
        <button onClick={this.handleLogOut}>Log Out</button>
        <Row className="UserProfile">
          <Images></Images>
          <Col>
            <Row>
              <Col>
                empty
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
                empty
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

export default GuideHome