import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

// import "./App.css";
import HomePage from "./pages/Home/Home";
import GamePage from "./pages/Game/GamePage";
// import LoginPage from "./pages/Login/Login";
import SignupPage from "./pages/Auth/Signup";
import LoginPage from "./pages/Auth/Login";

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
                <HomePage  />
              )
            }
          />
  
          <Route exact path="/login"
            render={
              () => (
                <LoginPage  />
              )
            }
          />
  
          <Route exact path="/signup"
            render={
              () => (
                  <SignupPage />
              )
            }
          />
  
          <Route exact path="/game" 
            render={
              () => (
                  <GamePage />
              )
            }
          />
  
        </div>
      </Router>
    );
  }
}


export default App;
