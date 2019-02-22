import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../../firebase";


class Login extends Component {
  handleSignUp = async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
    try {
      await firebaseauth
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
      this.props.history.push("/home");
    } catch (error) {
      alert(error);
    }
  };

  render() {
    return (
      <div className="App" style={{
        backgroundImage: "url('https://cdn.dribbble.com/users/1492844/screenshots/3307274/travel.gif')",
        backgroundPosition: "bottom",
        backgroundSize: "65%",
        backgroundRepeat: "no-repeat",
        backgroundColor: "white"
      }}>
        <div className="container-mark">
          <div style={{ marginTop: "3.5rem" }} className="row">
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
                      width: "100px",
                      height: "50px",
                      borderRadius: "50px",
                      letterSpacing: "1.5px",
                      padding: "16px",
                      fontSize: "12px"
                    }}
                    type="submit"
                    className="btn btn-large waves-effect waves-light hoverable blue accent-3"
                  >
                    Login
                </button>
                </div>            </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Login);