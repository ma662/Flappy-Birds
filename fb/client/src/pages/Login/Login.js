import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import "./login.css";

class LoginPage extends Component {
  render() {
    return( 
      
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><a href="/home">Home</a></li>
                {/* <li><a href="/game">Game</a></li> */}
                <li><a href="/signup">Sign-Up</a></li>
                {/* <li><a href="/login">Login</a></li> */}
                {/* <li><a href="/home">Logout</a></li> */}
              </ul>
            </div>
          </div>
        </div>
      </div>


      <div className="box flex " id="log-in">
        <form action="login" method="POST">
          User Name:<br />
          <input className="text-box" type="text" name="name" />
          <br />
          Password:<br />
          <input className="text-box" type="text" name="password" />
          <br />
            <button className="button" type="submit">submit</button>
          <br />
          <br />
            <Link to="/signup">Create Account</Link>
        </form>
      {/* </div>  */}
    );
  }
}

export default LoginPage;