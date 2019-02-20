import React, { Component } from "react";
import firebaseauth from "../firebase"
import { Link } from "react-router-dom";


class Home extends Component {
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
      <div>
        <h1>Welcome </h1>
        <button onClick={this.handleLogOut}>Log Out</button>
        <button><Link to="/voyages">To Voyage</Link></button>
      </div>
    )
  }
}

export default Home