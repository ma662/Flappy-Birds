import React from 'react';

import "./style.css";
import "./animate.css";

function Home() {
  return (
    <div className="homepage">
    
      {/* Burger Menu */}
      <div className="menu-wrap">
        <input type="checkbox" className="toggler" />
        <div className="hamburger">
          <div></div>
        </div>
        <div className="menu">
          <div>
            <div>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/game">Game</a></li>
                <li><a href="/signup">Sign-Up</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Title Section */}
      <header className="showcase">
        <div className="container showcase-inner">
          <h1 className="glow">CROW RUSH</h1>
          <a href="/signup" className="btn btn-light">Play Now !</a>
          <br/>
          <div className="audio1"style={{width: "100%"}}>
            <audio id="myAudio" controls style={{width: "79%"}}>
              <source src="/assets/audio/song.mp4" type="audio/mp4" autoplay></source>
            </audio>
          </div>
          <section id="section05" className="demo">
            <a><span></span></a>
          </section>
        </div>
      </header>

      <section className="row section floatinggif parallax dark">
        <h1>Powered by React!</h1>
        <img id="floatgif" src="/assets/images/floatingob.gif" alt="floating gif" />
      </section>

      <div className="container2">
        <div className="row">
          <div className="col-sm animated fadeInRight">
            <p> A simple browser re-imagining of the classic game: Flappy Birds! </p>
          </div>
        </div>
      </div>
  
      {/* Bird Section */}
      <div className="testbird">
        <img className="animated fadeInLeft delay-8s" src="assets/images/crow2.png" alt="crow"/>
      </div>

      {/* Dev Section */}
      <div className="container3">
        <div className="row">

          <div className="col-12 designers">
            <h2 className="designers1 animated heartBeat delay-10s"> Meet the Developers</h2>
            <p className="laser">((  combining gaming and web development since 2019 ))</p>
          </div>

          <div className="column animated flipInY delay-12s">
            <div className="card">
              <img src="/assets/images/Jason.jpg" alt="Jason" style={{ width: '100%' }} />
              <div className="container devcard">
                <h2>Jason</h2>
                <p className="title">Front-End Designer</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>JasonCipollari@gmail.com</p>
                <p><a className="portfolio" href="https://jasonsips.github.io/Portfolio/"><button className="port-button">Portfolio</button></a></p>
              </div>
            </div>
          </div>

          <div className="column animated flipInY delay-14s">
            <div className="card">
              <img src="/assets/images/Myles.jpg" alt="Myles" style={{ width: '100%' }} />
              <div className="container devcard">
                <h2>Myles</h2>
                <p className="title">Project Lead, Back-End Developer</p>
                <p>myles.alcala@yahoo.com</p>
                <p><a className="portfolio" href="http://ma662.github.io/Portfolio/"><button className="port-button">Portfolio</button></a></p>
              </div>
            </div>
          </div>

          <div className="column animated flipInY delay-20s">
            <div className="card">
              <img src="/assets/images/Tristan.jpg" alt="Tristan" style={{ width: '100%' }} />
              <div className="container devcard">
                <h2>Tristan</h2>
                <p className="title">Front-End Designer</p>
                <p>Tristanmartin88@gmail.com</p>
                <p><a className="portfolio" href="https://smove50.github.io/portfolio/"><button className="port-button">Portfolio</button></a></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <footer className="footer">
        <h3>WEBSITE DESIGNED & BUILT BY</h3>
        <h2 className="WE">TEAM AMBITIOUS</h2>
        <h5>ALL RIGHTS RESERVED</h5>
      </footer>
    </div> //homepage end
  );
}

export default Home;