import React, { Component } from "react";
import "./login.css";

class LoginPage extends Component { 
  render() {
    return( 

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
            <a href="/signup">Create Account</a>
      </form>
    </div>
    );
  }
}

export default LoginPage;