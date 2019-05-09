import React, { Fragment } from 'react';

import "./style.css";


function BurgerMenu() {

  
  // home 
    // signup / login

  // game
    // logout / home

  // signup 
    // home
  
  // logout
    // home
    
  return (
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
              <li><a href="/login">Login</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  
    );
}

export default BurgerMenu;