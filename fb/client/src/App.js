import React, { Component } from "react";
import { BrowserRouter as Router, Route, Redirect } from "react-router-dom";

// import "./App.css";
import HomePage from "./pages/Home/Home";
import GamePage from "./pages/Game/GamePage";
import SignupPage from "./pages/Auth/Signup";
import LoginPage from "./pages/Auth/Login";

import localAPI from "./util/local-auth";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }

  componentDidMount = () => {
    if (!this.state.user || !this.state.user.email) {
      alert("Attempting retrieveUser()");

      localAPI.retrieveUser().then(user => {
        console.log("User is:", user.data, " from App.js");

        if (user) {
          this.setState({ user: user.data });
        }
      });
    }
  }

  logOut = () => {
    localAPI.logout().then( res => {
      this.setUser({});
      return <Redirect to='/'/>
    })
  }

  setUser = user => {
    this.setState({
      user: user
    });
  };


  render() {
    return (
      <Router>
        <div>
          <Route exact path="/"
            render={
              () => (
                <HomePage {...this.props} setUser={this.setUser} user={this.state.user} />
              )
            }
          />

          <Route exact path="/login" 
            render = {
              () => (
                <LoginPage {...this.props} setUser={this.setUser} user={this.state.user} />
              )} />

  
          <Route exact path="/signup"
            render={
              () => (
                <SignupPage />
              )}
          />

          <Route exact path="/game"
            render={
              () => (
                <GamePage {...this.props} setUser={this.setUser} user={this.state.user} />
              )
            }
          />
        </div>
      </Router>
    );
  }
}


export default App;
