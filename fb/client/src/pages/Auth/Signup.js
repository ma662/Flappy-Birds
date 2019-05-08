import React, { Component } from "react";
import { Link } from "react-router-dom";
import localAPI from "../../util/local-auth";


class Signup extends Component {
  constructor() {
    super();
    this.state = {
      username: "",
      email: "",
      password: "",
      password2: "",
      errorMessage: null
    };
  }
onChange = e => {
  this.setState({ [e.target.id]: e.target.value });
};
onSubmit = e => {
  e.preventDefault();
  let err = null;

  const newUser = {
    username: this.state.username,
    email: this.state.email,
    password: this.state.password,
    password2: this.state.password2
  };

  // console.log(newUser);

  // check if newUser looks good
  if (newUser.password !== newUser.password2) {
    err = "Passwords do not match";
    this.setState({errorMessage: err});
  }
  else if (newUser.password === '' || newUser.password2 === '') {
    err = "Password fields cannot be blank";
    this.setState({errorMessage: err});
  }
  else if (newUser.username === '') {
    err = "Name cannot be blank";
    this.setState({errorMessage: err});
  }
  else if (newUser.email === '') {
    err = "Email cannot be blank";
    this.setState({errorMessage: err});
  }

  // then send to server to doublecheck
  else {
    console.log("Sending newUser now");
    // connect to localAPI 
    localAPI.signup(newUser).then( response => {
      console.log("RESPONSE IS:", response.data);
      var errorMessage = response.data.errorMessage;
      this.setState({errorMessage: errorMessage});
    });
  }
}
render() {
// const { errorMessage } = this.state;
return (
      <div className="container">
        <div className="row">
          <div className="col s8 offset-s2">
            <Link to="/" className="btn-flat waves-effect">
              <i className="material-icons left">keyboard_backspace</i> Back to
              home
            </Link>
            <div className="col s12" style={{ paddingLeft: "11.250px" }}>
              <h4>
                <b>Register</b> below
              </h4>
              <p className="grey-text text-darken-1">
                Already have an account? <Link to="/login">Log in</Link>
              </p>
            </div>

            <form validate="true" onSubmit={this.onSubmit} >
              <div className="input-field col s12">
                <input
                  required
                  onChange={this.onChange}
                  value={this.state.username}
                  // errorMessage={errorMessage.name}
                  id="username"
                  type="text"
                />
                <label htmlFor="username">Username</label>
              </div>
              <div className="input-field col s12">
                <input
                  required
                  onChange={this.onChange}
                  value={this.state.email}
                  // errorMessage={errorMessage.email}
                  id="email"
                  type="email"
                />
                <label htmlFor="email">Email</label>
              </div>
              <div className="input-field col s12">
                <input
                  required
                  onChange={this.onChange}
                  value={this.state.password}
                  // errorMessage={errorMessages.password}
                  id="password"
                  type="password"
                />
                <label htmlFor="password">Password</label>
              </div>
              <div className="input-field col s12">
                <input
                  required
                  onChange={this.onChange}
                  value={this.state.password2}
                  // errorMessage={errorMessage.password2}
                  id="password2"
                  type="password"
                />
                <label htmlFor="password2">Confirm Password</label>
              </div>
              <div className="col s12" style={{ paddingLeft: "11.250px" }}>
                <button
                  style={{
                    width: "150px",
                    borderRadius: "3px",
                    // letterSpacing: "1.5px",
                    // marginTop: "1rem"
                  }}
                  type="submit"
                  className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                  Sign up
                </button>
              </div>
            </form>
            {this.state.errorMessage}
          </div>
        </div>
      </div>
    );
  }
}
export default Signup;