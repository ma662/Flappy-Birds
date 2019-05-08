import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./App.css";
import HomePage from "./pages/Home/Home";
import GamePage from "./pages/Game/GamePage";
import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Signup/Signup";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      user: {}
    }
  }
  render() {
    return (
  
      <Router>
        <div>
  
          <Route exact path="/"
            render={
              () => (
                <Fragment>
                  <HomePage  />
                </Fragment>
              )
            }
          />
  
          <Route exact path="/login"
            render={
              () => (
                <Fragment>
                  <LoginPage  />
                </Fragment>
              )
            }
          />
  
          <Route exact path="/signup"
            render={
              () => (
                <Fragment>
                  <SignupPage  />
                </Fragment>
              )
            }
          />
  
          <Route exact path="/game" 
            render={
              () => (
                <Fragment>
                  <GamePage />
                </Fragment>
              )
            }
          />
  
        </div>
      </Router>
    );
  }
}


export default App;
