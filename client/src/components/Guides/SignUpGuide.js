import React, { Component } from "react";
import { withRouter } from "react-router";
import { Link } from "react-router-dom";
import firebaseauth from "../../firebase";
import API from "../../utils/API";
import "../../styles/RegisterGuide.css";
/* global google */

class SignUpGuide extends Component {
  state = {
    location: "",
  }

  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }
  componentDidMount() {
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
      { "types": ["geocode"] });


    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }


  handlePlaceChanged() {
    const place = this.autocomplete.getPlace();
    this.setState({ location: place.vicinity });
    console.log(this.state.location);
  }

  handleSignUp = async event => {
    event.preventDefault();
    const { email, password, name, languages, expertise, hourlyRate } = event.target.elements;
    try {
      const user = await firebaseauth
        .auth()
        .createUserWithEmailAndPassword(email.value, password.value);
      const userData = {
        uid: user.user.uid,
        name: name.value,
        email: email.value,
        location: this.state.location,
        languages: languages.value,
        expertise: expertise.value,
        hourlyRate: hourlyRate.value
      }
      API.saveGuide(userData);
      this.props.history.push("/home-guide");
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
                <b>Guide Register</b> below
                    </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login-guide"><b>Log in</b></Link>
              </p>
              <p className="grey-text text-darken-1">
                Need a guide? <Link to="/signup"><b>Sign Up Here!</b></Link>
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
              <div className="input-field col s6">
                <input ref={this.autocompleteInput} id="autocomplete" placeholder="Enter Your Location"
                  type="text" name="location"></input>
              </div>
              <div className="input-field col s6">
                <input
                  name="Expertise"
                  type="text"
                  placeholder="Enter your field(s) of expertise"
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="hourlyRate"
                  type="text"
                  placeholder="Enter your hourly rate."
                />
              </div>
              <div className="input-field col s6">
                <input
                  name="languages"
                  type="text"
                  placeholder="Enter your languages spoken"
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

          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(SignUpGuide);