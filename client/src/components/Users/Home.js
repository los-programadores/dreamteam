import React, { Component } from "react";
import firebaseauth from "../../firebase"
import Images from "../Image/Image"
import Voyages from "../Voyages/Voyages";
import YourVoyages from "../YourVoyages/YourVoyages";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import API from "../../utils/API";
import Navbar from "../Navbar";
//css style sheet
import "../../styles/Home.css"
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

            voyageComponent = this.state.voyages.map(voyageObject => <h1>{voyageObject.location}</h1>)
            console.log(this.state.voyages)
          }))
      }));
    });

  }

  render() {
    return (
      <Container className="container">
        <Row>
          <Col>
            <Navbar />
          </Col>
        </Row>
        {/* {console.log(this.state)} */}
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
            <div>
              {voyageComponent}
            </div>
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