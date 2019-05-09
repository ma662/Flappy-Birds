import React, { Component, Fragment } from 'react';
import LocalAPI from "../../util/local-auth";
import AppContainer from "./containers/AppContainer";

class GamePage extends Component {
  componentDidMount = () => {
    LocalAPI.retrieveUser().then( userResponse => {
      // userResponse.data
      console.log(userResponse);
      console.log("LOGLOGLOGLOGLOGLOGLOGLOGLOGLOG");

      console.log("CONFIRM:", userResponse.data);

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
    console.log(typeof(this.props.user));
    console.log(this.props);

    if (this.props.user) {
      console.log("USER SHOULD BE: ", this.props.user.username, " from GamePage.js");
      let m = this.props.user.username;
      console.log("m is:", m);
      // alert("User is:", m);
      return(
        <Fragment>
          <h3> Welcome {this.props.user.username}! </h3>
          <AppContainer />
        </Fragment>
        );
    }
    else {
      return(<p> You don't have access</p>);
    }

    // Just render game here instead for now:

  }
}

export default GamePage;