import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../firebase";
import API from "../utils/API";

class SignUpUser extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebaseauth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
      API.saveUser(user.user);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Sign up</h1>
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
        <button><Link to="/signup-guide">Sign up as a guide</Link></button>
        <button><Link to="/login">Login</Link></button>
      </div>
    );
  }
}

export default withRouter(SignUpUser);