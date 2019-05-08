import React, { Fragment } from 'react';
import "./style.css";
import "./animate.css";

function Home() {
  return (
    
  <Fragment>
      {
      /* 
      integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
      <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
      <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
      integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
      crossorigin="anonymous"></script>
      <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
      integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
      crossorigin="anonymous"></script>
      <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
      integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
      crossorigin="anonymous"></script>
    */
    }

    <link rel="stylesheet" type="text/css" href="/assets/css/style.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="/assets/java/script.js" media="screen" />
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>

    <div className="menu-wrap">
      <input type="checkbox" className="toggler"/>
      <div className="hamburger">
        <div></div>
      </div>

      <div className="menu">
        <div>
          <div>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/game">Game</a></li>
              <li><a href="/">Sign-Up</a></li>
              <li><a href="/">Logout</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <header className="showcase">
      <div className="container showcase-inner">
        <h1 className="glow">CROW RUSH</h1>
          {/* <!-- <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas maiores sint impedit delectus quam molestiae
          explicabo cum facere ratione veritatis.</p> -->  */}
        <a href="/" className="btn btn-light">Start Game</a>
      </div>
    </header>

    <div className="container1 backgroundtexture1">
      <div className="row">
        <div className="col-12">
          <h6 className="power">Powered By:</h6>
        </div>
          {/* <!-- <div className="col-sm">
        </div> -->  */}
        <div className="col-12 reactlogo">
          <img src="assets/images/React.js_logo-512.png" alt="react-logo" width="500rem" height="500rem" alt="logo for react"/>
        </div>
      </div>
    </div>

    <div className="container2">
      <div className="row">

        <div className="col-sm">
          <p>YOUR MISSION, SHOULD YOU CHOOSE TO ACCEPT IT: TWO DAYS LOADED WITH RADICAL LEARNING, GROWING, AND QUALITY
            TIME WITH THE WONDERFUL LARAVEL COMMUNITY.</p>
        </div>

      </div>
    </div>

    <div className="slideshow-container">

    {/* <!-- Full-width images with number and caption text -->  */}
    <div className="mySlides fade">
      <div className="numbertext">1 / 3</div>
        <img src="assets/images/differentbirds.png" alt="different_birds" style={{'width': '100%'}}/>
      <div className="text">Caption Text</div>
    </div>

    <div className="mySlides fade">
      <div className="numbertext">2 / 3</div>
        <img src="" alt="img2" style={{width: '100%'}}/>
      <div className="text">Caption Two</div>
    </div>

    <div className="mySlides fade">
      <div className="numbertext">3 / 3</div>
        <img src="" alt="img3" style={{width: '100%'}}/>
      <div className="text">Caption Three</div>
    </div>

      {/* <!-- Next and previous buttons -->  */}
      <a href="/" className="prev" onclick="plusSlides(-1)">&#10094;</a>
      <a href="/" className="next" onclick="plusSlides(1)">&#10095;</a>
    </div>
    <br/>

    {/* <!-- The dots/circles -->  */}
    <div style={{"text-align":"center"}}>
      <span className="dot" onclick="currentSlide(1)"></span>
      <span className="dot" onclick="currentSlide(2)"></span>
      <span className="dot" onclick="currentSlide(3)"></span>
    </div>

    <div className="container3">
      <div className="row">
        <div className="col-12 designers">
          <h2 className="designers1"> The Designers</h2>
        </div>

      <div className="column">
        <div className="card">
          <img src="" alt="Jason Sips" style={{width: '100%'}}/>
          <div className="container">
            <h2>Jason Sips</h2>
            <p className="title">Front-End Designer</p>
            <p>Some text that describes me lorem ipsum ipsum lorem.</p>
            <p>example@example.com</p>
            <p><button className="button">Portfolio</button></p>
          </div>
        </div>
    </div>

    <div className="column">
      <div className="card">
        <img src="" alt="Myles" style={{width: '100%'}}/>
        <div className="container">
          <h2>Myles </h2>
          <p className="title">Back-End Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>example@example.com</p>
          <p><button className="button">Portfolio</button></p>
        </div>
      </div>
    </div>

    <div className="column">
      <div className="card">
        <img src="" alt="Tristan Martin" style={{width: '100%'}}/>
        <div className="container">
          <h2>Tristan Martin</h2>
          <p className="title">Front-End Designer</p>
          <p>Some text that describes me lorem ipsum ipsum lorem.</p>
          <p>example@example.com</p>
          <p><button className="button">Portfolio</button></p>
        </div>
      </div>
    </div>


    </div>
    </div> 

  </Fragment>
  );
}

export default Home;