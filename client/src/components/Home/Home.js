import React, { Component } from "react";
import firebaseauth from "../../firebase"
import Images from "../Image/Image";
import Voyages from "../Voyages/Voyages";
import YourVoyages from "../YourVoyages/YourVoyages";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Chat from "../GuideChat"
import Col from "react-bootstrap/Col";
import API from "../../utils/API";
import Navbar from "../Navbar/Navbar";
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom'
import "./Home.css";

let voyageComponent;
class Home extends Component {
  state = {
    uid: "",
    userName: "",
    voyages: []
  };


  componentDidMount() {
    const user = firebaseauth.auth().currentUser.uid;
    console.log(user)

    this.setState({ uid: user }, function () {
      API.getUser(this.state.uid).then(res => this.setState({ userName: res.data.name }, function () {

        API.getVoyages(this.state.uid)
          .then(res => this.setState({ voyages: res.data }, function () {

            voyageComponent = this.state.voyages.map(voyageObject =>
              (<div className={voyageObject._id} onClick={this.sendVoyage}>
                <h1 className={voyageObject._id} >{voyageObject.location}</h1>
                <p>{voyageObject.information.description}</p>
              </div>
              )
            )
            console.log(this.state.voyages)
            this.forceUpdate();
          }))

      }));
    });

  }

  sendVoyage = (e) => {
    this.props.history.push(`/gchat/${e.target.className}`)
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
          <Col>
            <Voyages />
          </Col>
        </Row>
        <Row className="yourVoyages">
          <Col lg={12} className="insert-voyage">
            <YourVoyages voyage= {voyageComponent} time="Current Voyages"/>

          </Col>
        </Row>
      </Container>
    )
  }
}

export default Home
