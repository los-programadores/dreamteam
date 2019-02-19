import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../firebase";
import API from "../utils/API";

class SignUpGuide extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebaseauth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
      firebaseauth.auth().onAuthStateChanged(user => {
        if (user) {
          API.saveGuide(user);
        }
      });
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Guide - Sign up</h1>
        <h6><Link to="/">Go Home</Link></h6>
        <form onSubmit={this.handleSignUp}>
          <label>
            Email
            <input
              name="email"
              type="email"
              placeholder="Email"
            />
          </label>
          <label>
            Password
            <input
              name="password"
              type="password"
              placeholder="Password"
            />
          </label>
          <button type="submit">Sign Up</button>
        </form>
        <button><Link to="/signup">Sign up as user</Link></button>
        <button><Link to="/login">Login</Link></button>
      </div>
    );
  }
}

export default withRouter(SignUpGuide);