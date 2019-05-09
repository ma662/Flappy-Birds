import React, { Component, Fragment } from 'react';
import LocalAPI from "../../util/local-auth";
import AppContainer from "./containers/AppContainer";

import BurgerMenu from "../../components/burger-menu/BurgerMenu";

class GamePage extends Component {
  componentDidMount = () => {
    LocalAPI.retrieveUser().then( userResponse => {
      // userResponse.data
      if(userResponse.data){
        this.props.setUser(userResponse.data); // email, username
      }
      else{
        alert("Login first?");
        window.location = "/login";
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
        <Fragment>
        <BurgerMenu/>
          <h3> Welcome {this.props.user.username}! </h3>
          <AppContainer />
        </Fragment>
        );
    }
    else {
      return(<p> You don't have access</p>);
    }
  }
}

export default GamePage;