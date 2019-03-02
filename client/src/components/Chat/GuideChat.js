import React, { Component } from "react";
import API from "../../utils/API";
import Container from 'react-bootstrap/Container';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./style.css";
import Navbar from "../Navbar/index"



class GuideChat extends Component {
  state = {
    guideID: '',
    guideInfo: {},
    voyageID: '',
    voyageLocation: '',
    voyageDescription: '',
    guideName: '',
    travelerName: '',
    userInterests: '',
    languages: '',
    chat: []
  }

  componentDidMount() {
    const voyageIDFromURL = this.props.match.params.voyageID;
    this.setState({ voyageID: voyageIDFromURL }, function () {
      API.getVoyage(this.state.voyageID)
        .then(res =>
          this.setState(
            {
              guideID: res.data.guideID,
              voyageLocation: res.data.location,
              voyageDescription: res.data.information.description,
              guideName: res.data.guideName,
              travelerName: res.data.userName,
              userInterests: res.data.information.interests,
              languages: res.data.information.languages,
              chat: res.data.chat
            }, function () {
              API.getGuide(this.state.guideID).then(res =>
                this.setState(
                  { guideInfo: res.data }, function () {
                    this.forceUpdate();
                  }
                ))

            }))
    });
  };

  pushMessage = event => {
    const message = {
      message: event.target.message.value,
      userName: this.state.guideName
    }
    event.target.message.value = "";
    if (message.message !== "") {
      API.postVoyageChat(this.state.voyageID, message).then(res => this.setState({ chat: res.data.chat }, () => {
        this.forceUpdate();
      }))
    }

  }


  render() {
    return (
      <Container fluid="true" className="chatContainer">

        <Row>
          <Col>
            <Navbar></Navbar>
          </Col>
        </Row>

        <Row>
          <Col>
            <h1 className="guidechat text-center" >Chat with User</h1>
          </Col>
        </Row>

        <Row>

          <Col className="voyageinfo" md="auto">

            <div style={{ marginBottom: "10px" }} className="details">
              <h2 className="user-guide">{this.state.travelerName}'s Voyage to {this.state.voyageLocation}</h2>
              <h2>Details</h2>
              <p>Traveler: {this.state.travelerName} </p>
              <p>Location: {this.state.voyageLocation}</p>
              <p>Descripton: {this.state.voyageDescription}</p>
              <p>Languages {this.state.travelerName} needs support with: {this.state.languages}</p>
              <h2>Your Information</h2>
              <p>Your Expertise: {this.state.guideInfo.expertise}</p>
              <p>Your Languages: {this.state.guideInfo.languages}</p>
              <p>Your Rate: ${this.state.guideInfo.hourlyRate}/hour </p>
            </div>

          </Col>

          <Col className="chat">
            <div className="messageChat">
              <h1>Messages</h1>
              <div className="chatHolder">
                {this.state.chat.map((chatMessage, i) => <p key={i}><span className="chatter">{chatMessage.userName} Says:</span><div className="response"> {chatMessage.message}</div></p>)}
              </div>

              <form className="textform" onSubmit={this.pushMessage}>

                <textarea name="message" placeholder="Leave a message for your user!" />
                <button id="chatbtn" type="submit">Send Message</button>

              </form>
            </div>
          </Col>
        </Row>

      </ Container>
    )
  }
}

export default GuideChat