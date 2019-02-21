import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../firebase";
import API from "../utils/API";
import "../styles/Register.css";

class SignUpUser extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password, name } = event.target.elements;
    try {
      const user = await firebaseauth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/home");
      const userData = {
        uid: user.user.uid,
        name: name.value
      }
      API.saveUser(userData);
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
                    </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>
            <form onSubmit={this.handleSignUp}>
              <div className="input-field col s6">
                <input
                  name="name"
                  type="text"
                  placeholder="Full Name"
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="password2"
                  type="password"
                  placeholder="Confirm Password"
                />
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}></div>
              <button
                style={{
                  width: "140px",
                  borderRadius: "50px",
                  letterSpacing: "1px",
                  padding: "10px"
                }}
                type="submit"
                className="btn btn-large waves-effect waves-light hoverable blue accent-3"
              >Sign up
                </button>

            </form>
            <button><Link to="/signup-guide">Sign up as a guide</Link></button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpUser);