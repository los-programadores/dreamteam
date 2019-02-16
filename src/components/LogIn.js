import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../firebase";


class Login extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      const user = await firebaseauth
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div>
        <h1>Login</h1>
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
          <button type="submit">Login</button>
        </form>
        <button><Link to="/signup">Sign Up</Link></button>
      </div>
    );
  }
}

export default withRouter(Login);