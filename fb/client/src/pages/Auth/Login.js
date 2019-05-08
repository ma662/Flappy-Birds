import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
import localAPI from "../../util/local-auth";

class LoginPage extends Component {
  state = {
    email: "",
    password: "",
    errorMessage: null
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

    localAPI.login({
      user_email: this.state.email,
      user_password: this.state.password
    }).then(response => {
      console.log("Response in Login is:", response);
      let user = response.data;
      // make sure we have an email
      if (user && user.email) {
        this.props.setUser(user);
        this.setState({
          errorMessage: null
        });
      }
      else {
        this.setState({
          errorMessage: "Credentials could not be verified"
        });
      }
    }).catch(error => {
      console.log(error);
      console.log("Error above");

      this.setState({
        errorMessage: "Could not log in"
      });
    })
  }
  render() {
    if (this.props.user && this.props.user.email) {
      return <Redirect to="/game" />;
    }
    return (
      <div>
        <form className="auth-form">
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              value={this.state.email}
              onChange={this.handleInputChange}
              name="email"
              type="text"
              className="form-control"
              placeholder="Type in Email"
              id="email"
            />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              value={this.state.password}
              onChange={this.handleInputChange}
              name="password"
              type="password"
              className="form-control"
              placeholder="Type in Password"
              id="password"
            />
          </div>

          <button type="submit" onClick={this.handleFormSubmit} className="btn btn-success">
            Play Now
                </button>
        </form>
        {this.state.errorMessage}
      </div>
    );
  }
}

export default LoginPage;