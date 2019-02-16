import React, { Component } from "react";
import firebaseauth from "../firebase"

class Home extends Component {
  handleLogOut = () => {
    firebaseauth.auth().signOut().then(function () {
      // Sign-out successful.
    }).catch(function (error) {
      throw error
    });
  }

  render() {
    return (
      <div>
        <h1>Home</h1>
        <button onClick={this.handleLogOut}>Log Out</button>
      </div>
    )
  }
}

export default Home