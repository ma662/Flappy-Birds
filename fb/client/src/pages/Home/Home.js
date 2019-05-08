import React, { Fragment } from 'react';
// import "./animate.css";
import "./style.css";
import "./script.js";


function Home() {
  return (
    
    <Fragment>

      
  
    
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/> 

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
                <li><a href="/game">Game</a></li>
                <li><a href="/signup">Sign-Up</a></li>
                <li><a href="/login">Login</a></li>
                <li><a href="/home">Logout</a></li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <header className="showcase">
        <div className="container showcase-inner">
          <h1 className="glow">CROW RUSH</h1>
          <a href="/game" className="btn btn-light">Start Game</a>
          <div className="audio1">
            <audio id="myAudio" controls autoplay>
            <source src="/assets/images/song.mp4" type="audio/mp4">
            </source>
            </audio>
          </div>
          <section id="section05" class="demo">
            <a href="#"><span></span></a>
          </section>

        </div>
      </header>

      <div className="container1 backgroundtexture1">
        <div className="row">
          <div className="col-12">
            <h6 className="power">Powered By:</h6>
          </div>
          {/* <!-- <div className="col-sm">
        </div> -->  */}
          <div className="col-12 reactlogo ">
            <img src="assets/images/React.js_logo-512.png" alt="react-logo" width="150rem" height="200rem" />
          </div>

        </div>
      </div>

      <div className="container2">
        <div className="row">

          <div className="col-sm ">
            <p>YOUR MISSION, SHOULD YOU CHOOSE TO ACCEPT IT: THIS GAME WAS DEVELOP TO TEST YOUR SKILL, PASSION, AND ABLILITY 
            TO TRY AND GET THE TOP SCORE.</p>
          </div>

        </div>
      </div>
      {/* testing out parallax documentation */}

      <div class="parallax"></div>





      {/* ending parallax documentation */}





      {/* slideshow begins */}
      <div class="colorbackground" height="500rem">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/assets/images/test1.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/assets/images/backgroundcontent3.jpg" class="d-block w-100" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/assets/images/backgroundcontent4.jpg" class="d-block w-100" alt="..." />
            </div>
          </div>
          <a class="carousel-control-prev" href="#carouselExampleFade" role="button" data-slide="prev">
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="sr-only">Previous</span>
          </a>
          <a class="carousel-control-next" href="#carouselExampleFade" role="button" data-slide="next">
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="sr-only">Next</span>
          </a>
        </div>
      </div>

      {/* testing out parallax documentation */}

      <div class="parallax2"></div>





      {/* ending parallax documentation */}

      {/* slideshow ends */}
      <div className="container3">
        <div className="row">
          <div className="col-12 designers">
            <h2 className="designers1"> The Designers</h2>
            <p class="laser">WE'RE LASER FOCUSED ON IMMEDIATELY ACTIONABLE CONTENT FROM A WIDE RANGE OF GREAT DESIGNERS</p>
          </div>

          <div className="column">
            <div className="card">
              <img src="" alt="Jason" style={{ width: '100%' }} />
              <div className="container">
                <h2>Jason</h2>
                <p className="title">Front-End Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button className="button">Portfolio</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="" alt="Myles" style={{ width: '100%' }} />
              <div className="container">
                <h2>Myles</h2>
                <p className="title">Back-End Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button className="button">Portfolio</button></p>
              </div>
            </div>
          </div>

          <div className="column">
            <div className="card">
              <img src="" alt="Tristan" style={{ width: '100%' }} />
              <div className="container">
                <h2>Tristan</h2>
                <p className="title">Front-End Designer</p>
                <p>Some text that describes me lorem ipsum ipsum lorem.</p>
                <p>example@example.com</p>
                <p><button a href="https://smove50.github.io/portfolio/" className="button">Portfolio</button></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="container5">
        <footer class="footer">
          <h3>WEB-SITE DESIGNED & BUILT BY</h3>

          <h2 class="WE">WE CAN FLY</h2>
          <h4>ALL RIGHTS RESERVED.</h4>
        
        </footer>
      </div>

    </Fragment>

  );
}

export default Home;