import React, { Component, Fragment } from 'react';
import LocalAPI from "../../util/local-auth";
import AppContainer from "./containers/AppContainer";

import "./gamepage.css";

class GamePage extends Component {
  componentDidMount = () => {
    LocalAPI.retrieveUser().then( userResponse => {
      // userResponse.data
      if(userResponse.data){
        this.props.setUser(userResponse.data); // email, username
      }
      else{
        window.location = "/login";
      }
    })
  }
  render() {
    
    if (this.props.user) {
      // console.log("USER SHOULD BE: ", this.props.user.username, " from GamePage.js");
      let m = this.props.user.username;
      return(
        <div className="gamepage">
          {/* THIS NEEDS TO GO IN ITS OWN SECTION */}
          <AppContainer />
          <div id="info-tracker">
            <h3> Welcome <span id="user-display">{this.props.user.username}!</span></h3>
            <h6> Best Score: </h6>
          </div> 
        </div>
        );
    }
    else {
      return(<p> You don't have access</p>);
    }
  }
}

export default GamePage;