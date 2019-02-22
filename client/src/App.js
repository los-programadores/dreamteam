import React, { Component } from "react";
import { BrowserRouter as Router, Redirect } from "react-router-dom";
import Home from "./components/Users/Home";
import HomeGuide from "./components/Guides/HomeGuide";
import Landing from "./components/landingPage";
import Login from "./components/Users/LogIn";
import LoginGuide from "./components/Guides/LoginGuide";
import SignUpUser from "./components/Users/SignUpUser";
import SignUpGuide from "./components/Guides/SignUpGuide";
import { PrivateRouteHome, PrivateRouteLanding } from "./components/PrivateRoute"
import firebaseauth from "./firebase"
import Voyages from "./components/Voyages"
import GuideSelect from "./components/GuideSelect"
import Chat from "./components/GuideChat"





class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentDidMount() {
    const user = firebaseauth.auth().currentUser;

    if (user) {
      // send to home page
    } else {
      // send to landing page
    }


    firebaseauth.auth().onAuthStateChanged(user => {
      if (user) {
        this.setState({
          authenticated: true,
          currentUser: user,
          loading: false
        });
      } else {
        this.setState({
          authenticated: false,
          currentUser: null,
          loading: false
        });

      }
    });
  }

  render() {
    const { authenticated, loading } = this.state;

    if (loading) {
      return <p>Loading...</p>;
    }

    // if (!authenticated) {
    //   return <Redirect to="/" />
    // }

    return (
      <Router>
        <div>
          <PrivateRouteLanding exact path="/home" component={Home} authenticated={this.state.authenticated} />
          <PrivateRouteLanding exact path="/home-guide" component={HomeGuide} authenticated={this.state.authenticated} />
          <PrivateRouteHome exact path="/" component={Landing} authenticated={this.state.authenticated} />
          <PrivateRouteHome exact path="/login" component={Login} authenticated={this.state.authenticated} />
          <PrivateRouteHome exact path="/login-guide" component={LoginGuide} authenticated={this.state.authenticated} />
          <PrivateRouteLanding exact path="/voyages" component={Voyages} authenticated={this.state.authenticated} />
          <PrivateRouteLanding exact path="/guides" component={GuideSelect} authenticated={this.state.authenticated} />
          <PrivateRouteHome exact path="/signup" component={SignUpUser} authenticated={this.state.authenticated} />
          <PrivateRouteHome exact path="/signup-guide" component={SignUpGuide} authenticated={this.state.authenticated} />
          <PrivateRouteLanding exact path="/gchat" component={Chat} authenticated={this.state.authenticated} />
        </div>
      </Router>
    )
  }
}

export default App;