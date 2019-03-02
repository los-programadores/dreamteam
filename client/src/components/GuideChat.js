import React, { Component } from "react";
import API from "../utils/API";


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
      console.log(this.state.voyageID)
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
              console.log(this.state)
              API.getGuide(this.state.guideID).then(res =>
                this.setState(
                  { guideInfo: res.data }, function () {
                    this.forceUpdate();
                    console.log(this.state)
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
    console.log(message)
    event.target.message.value = "";
    if (message.message !== "") {
      API.postVoyageChat(this.state.voyageID, message).then(res => this.setState({ chat: res.data.chat }, () => {
        this.forceUpdate();
      }))
    }

  }


  render() {
    return (
      <div>
        <h1 className="text-center" >Chat with Guide</h1>
        <div>
          <h1>{this.state.travelerName}'s Voyage to {this.state.voyageLocation}</h1>
          <h2>Details</h2>
          <p>Traveler: {this.state.travelerName} </p>
          <p>Location: {this.state.voyageLocation}</p>
          <p>Descripton: {this.state.voyageDescription}</p>
          <p>Languages {this.state.travelerName} needs support with: {this.state.languages}</p>
          <p>Your Information:</p>
          <p>Your Expertise: {this.state.guideInfo.expertise}</p>
          <p>Your Languages: {this.state.guideInfo.languages}</p>
          <p>Your Rate: ${this.state.guideInfo.hourlyRate}/hour </p>


        </div>
        <div>
          <h1>Messages</h1>
          <div>
            {this.state.chat.map((chatMessage, i) => <p key={i}>{chatMessage.userName} Says: {chatMessage.message}</p>)}
          </div>
          <form onSubmit={this.pushMessage}>
            <textarea name="message" placeholder="Leave a message for your guide!" />
            <button type="submit">Send Message</button>
          </form>
        </div>
      </div>
    )
  }
}

export default GuideChat