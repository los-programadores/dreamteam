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
      this.props.history.push("/home");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="container">
        <div style={{ marginTop: "4rem" }} className="row">
          <div className="col sm8 offset-s2">

            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Login</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Don't have an account? <Link to="/signup">Register</Link>
              </p>
            </div>

            <form onSubmit={this.handleSignUp}>
              <div className="input-field col s5">
                <input
                  name="email"
                  type="email"
                  placeholder="Email"
                />
              </div>

              <div className="input-field col s5">
                <input
                  name="password"
                  type="password"
                  placeholder="Password"
                />
              </div>

              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "50px",
                    letterSpacing: "1.5px",
                    marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                >
                  Login
                </button>
              </div>            </form>
          </div>
        </div>
      </div >
    );
  }
}

export default withRouter(Login);