import React, { Component, Fragment } from 'react';
import LocalAPI from "../../util/local-auth";
import GameContainer from "./containers/GameContainer";

import BurgerMenu from "../../components/burger-menu/BurgerMenu";

class GamePage extends Component {
  componentDidMount = () => {
    LocalAPI.retrieveUser().then( userResponse => {
      // userResponse.data
      if(userResponse.data){
        this.props.setUser(userResponse.data); // email, username
      }
      else{
        return window.location = "/login";
        // alert("Please Login");
      }
    })
  }
  render() {
    
    if (this.props.user) {
      // console.log("USER SHOULD BE: ", this.props.user.username, " from GamePage.js");
      let m = this.props.user.username;
      // console.log("m is:", m);
      // alert("User is:", m);
      return(
        <div className="page">
          <div className="burger">
            <BurgerMenu />
          </div>
          <div className="game-container" style={{"width":"500px"}}>
          <GameContainer />
          </div>

          <div className="info-tracker">
          {/* THIS NEEDS TO GO IN ITS OWN SECFTION */}
            <h3> Welcome <span id="user-display">{this.props.user.username}!</span></h3>
          </div> 
        </div>
        );
    }
    else {
      return(
        <p> You don't have access</p>);
    }
  }
}

export default GamePage;