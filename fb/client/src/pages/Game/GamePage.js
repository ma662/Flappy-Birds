import React, {Component} from 'react';
import LocalAPI from "../../util/local-auth";

class GamePage extends Component {
  componentDidMount = () => {
    LocalAPI.retrieveUser().then( userResponse => {
      console.log(userResponse);
      console.log("LOGLOGLOGLOGLOGLOGLOGLOGLOGLOG");

      if(userResponse.data){
        this.props.setUser(userResponse.data);
      }
    })
  }
  render() {
    if (this.props.user) {
      console.log(this.props.user);
      alert("User is:", this.props.user);
      return(
       <p> Game would go here </p>
        );
    }
    else {
      return(<p> You don't have access</p>);
    }

    // Just render game here instead for now:

  }
}

export default GamePage;