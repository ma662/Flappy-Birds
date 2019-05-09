import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import localAPI from "../../util/local-auth";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    message: null
  }

  handleInputChange = event => {
    // copy
    let name = event.target.name;
    let value = event.target.value;

    //setState
    this.setState({
      [name]: value
    });
  }

  handleFormSubmit = event => {
    event.preventDefault();
    
    // console.log(event.target);
    if (this.state.password.length < 1) {
      return this.setState({message: "Password cannot be blank"});
    } 
    
    let temp = {};
    temp.email = this.state.email;
    temp.password = this.state.password;
    // console.log(this.state.email, this.state.password);

    console.log(temp);

    localAPI.login(temp)
    .then(response => {
      console.log("Response in Login is:", response);
      let user = response.data;

      console.log("user is: ", user);

      // make sure we have an email
      if (user && user.email) {
        alert("USER VERIFIED");
        this.props.setUser(user);
        this.setState({
          message: null
        });
      }
      else {
        alert("Could not be verified");
        this.setState({
          message: "Credentials could not be verified"
        });
      }
    }).catch(error => {
      console.log(error);
      console.log("Error above");

      this.setState({
        message: "Could not log in"
      });
    })
    .catch( err => {
      console.log(err);
    })
  }
  render() {
    if (this.props.user && this.props.user.email) {
      alert("Time to redirect?");
      return <Redirect to="/game" />;
    }
    return (
      <div>
        <form className="auth-form" type="POST">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              type="email"
              id="email"
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              id="password"
              className="form-control"
              required
            />
          </div>

          <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
            Play Now
          </button>
        </form>
        {this.state.message}
      </div>
    );
  }
}

export default LoginPage;