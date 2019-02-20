import React, { Component } from "react";
import firebaseauth from "../firebase"
import { Link } from "react-router-dom";

import API from "../utils/API";

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
      <div>
        <h1>Welcome {this.state.userName}</h1>
        <button onClick={this.handleLogOut}>Log Out</button>
        <button><Link to="/voyages">To Voyage</Link></button>
      </div>
    )
  }
}

export default Home