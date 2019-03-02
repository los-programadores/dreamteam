import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";
import Home from "./components/Home/Home";
import HomeGuide from "./components/Guides/HomeGuide";
import Landing from "./components/Landing";
import Login from "./components/LogIn";
import LoginGuide from "./components/Guides/LoginGuide";
import SignUpUser from "./components/Register";
import SignUpGuide from "./components/Guides/SignUpGuide";
import { PrivateRouteLanding } from "./components/PrivateRoute"
import firebaseauth from "./firebase"
import Voyages from "./components/VoyagesPage/Voyages"
import GuideSelect from "./components/GuideSelect"
import UserChat from "./components/UserChat"
import GuideChat from "./components/GuideChat"





class App extends Component {
  state = { loading: true, authenticated: false, user: null };


  componentDidMount() {
    // console.log(this.state)
    // const user = firebaseauth.auth().currentUser;

    // if (user) {
    //   // send to home page
    // } else {
    //   // send to landing page
    // }


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
          <Route exact path="/" component={Landing} authenticated={this.state.authenticated} />
          <Route exact path="/login" component={Login} authenticated={this.state.authenticated} />
          <Route exact path="/login-guide" component={LoginGuide} authenticated={this.state.authenticated} />
          <PrivateRouteLanding exact path="/voyages" component={Voyages} authenticated={this.state.authenticated} />
          <PrivateRouteLanding exact path="/guides" component={GuideSelect} authenticated={this.state.authenticated} />
          <Route exact path="/signup" component={SignUpUser} authenticated={this.state.authenticated} />
          <Route exact path="/signup-guide" component={SignUpGuide} authenticated={this.state.authenticated} />
          <PrivateRouteLanding exact path="/gchat/:voyageID" component={UserChat} authenticated={this.state.authenticated} />
          <PrivateRouteLanding exact path="/gchatg/:voyageID" component={GuideChat} authenticated={this.state.authenticated} />
        </div>
      </Router>
    )
  }
}

export default App;