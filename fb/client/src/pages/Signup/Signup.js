import React, { Component } from "react";
import "./signup.css";

class SignupPage extends Component {
  render() {
    return (

      <div class="box flex" id="sign-up">
        <form action="/SignUp" method="POST">
          User Name:<br />
          <input class="text-box" type="text" name="username" />
          <br />
          Password:<br />
          <input class="text-box" type="text" name="password" />
          <br />
          Confim Password:<br />
          <input class="text-box" type="text" name="confpassword" />
          <br />
          <button class="button" type="submit">Submit</button >
        </form>
    </div>
    );
  }
}

export default SignupPage;