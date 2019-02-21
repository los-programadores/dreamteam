import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Landing from "./components/landingPage";
import LogIn from "./components/LogIn";
import SignUpUser from "./components/SignUpUser";
import SignUpGuide from "./components/SignUpGuide";
import PrivateRoute from "./components/PrivateRoute"
import firebaseauth from "./firebase"
import Voyages from "./components/Voyages"
import GuideSelect from "./components/GuideSelect"
import Chat from "./components/GuideChat"




class App extends Component {
  state = { loading: true, authenticated: false, user: null };

  componentDidMount() {
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

    return (
      <Router>
        <div>
          <PrivateRoute exact path="/home" component={Home} authenticated={this.state.authenticated} />
          <Route exact path="/" component={Landing} />
          <Route exact path="/login" component={LogIn} />
          <Route exact path="/voyages" component={Voyages} />
          <Route exact path="/guides" component={GuideSelect} />
          <Route exact path="/signup" component={SignUpUser} />
          <Route exact path="/signup-guide" component={SignUpGuide} />
          <Route exact path="/gchat" component={Chat} />
        </div>
      </Router>
    )
  }
}

export default App;