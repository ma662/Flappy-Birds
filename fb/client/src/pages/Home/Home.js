import React, { Fragment } from 'react';
// import "./animate.css";
import "./style.css";
import "./script.js";
import "./animate.css";

// import BurgerMenu from "../../components/burger-menu/BurgerMenu";


function Home() {
  return (
    
  <Fragment>
    
    {/* <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"/>
    <script src="https://code.jquery.com/jquery-3.3.1.slim.min.js"
    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo"
    crossorigin="anonymous"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js"
    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1"
    crossorigin="anonymous"></script>
    <script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js"
    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM"
    crossorigin="anonymous"></script>
    <link rel="stylesheet" type="text/css" href="/assets/css/style.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="/assets/css/animate.css" media="screen" />
    <link rel="stylesheet" type="text/css" href="/assets/java/script.js" media="screen" /> 
    <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet"/>*/}

      
  
    
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

      {/* <BurgerMenu/> */}

      <header className="showcase">
        <div className="container showcase-inner">
          <h1 className="glow">CROW RUSH</h1>
          <a href="/signup" className="btn btn-light">Start Game</a>
          <div className="audio1">
            <audio id="myAudio" controls>
            <source src="/assets/images/song.mp4" type="audio/mp4">
            </source>
            </audio>
          </div>
          <section id="section05" class="demo">
            <a href=""><span></span></a>
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
          <div className="col-12 reactlogo animated zoomIn delay-2s">
            <img src="assets/images/react_logo.png" alt="react-logo" width="150rem" height="200rem" />
          </div>
 
        </div>
      </div>


      <div className="floatinggif">
      <img src="/assets/images/floatingob.gif" class="size" alt="floating gif" />
      </div>

      <div className="container2">
        <div className="row">

          <div className="col-sm animated fadeInRight delay-3s">
            <p>EXPERIENCE A GAME UNLIKE ANY OTHER. SIGNUP AND LOGIN TO GET INTO THE SINGLE-PLAYER EXPERIENCE OF A LIFETIME </p>
          </div>

        </div>
      </div>
      {/* testing out parallax documentation */}





      {/* ending parallax documentation */}





      {/* slideshow begins */}
      <div class="colorbackground">
        <div id="carouselExampleFade" class="carousel slide carousel-fade" data-ride="carousel">
          <div class="carousel-inner">
            <div class="carousel-item active">
              <img src="/assets/images/gallery3.jpg" class="size" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/assets/images/clouds2-1.jpg" class="size" alt="..." />
            </div>
            <div class="carousel-item">
              <img src="/assets/images/gallery5.jpg" class="size" alt="..." />
            </div>
            {/* <div class="carousel-item">
              <img src="/assets/images/gallery5.jpg" class="size" alt="..." />
            </div> */}
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

      {/* slideshow ends */}

      {/* testing out bird design since parallax dont work */}

      <div class="testbird">
      <img class="animated fadeInLeft delay-8s" src="assets/images/crow2.png" alt="crow"/>
      </div>


      {/* starting for designer area  */}
      <div className="container3">
        <div className="row">
          <div className="col-12 designers">
            <h2 className="designers1 animated heartBeat delay-10s"> The Designers</h2>
            <p class="laser">WE'RE LASER FOCUSED ON IMMEDIATELY ACTIONABLE CONTENT FROM A WIDE RANGE OF GREAT DESIGNERS</p>
          </div>

          <div className="column animated flipInY delay-11s">
            <div className="card">
              <img src="/assets/images/Jason.jpg" alt="Jason" style={{ width: '100%' }} />
              <div className="container">
                <h2>Jason</h2>
                <p className="title">Front-End Designer</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>JasonCipollari@gmail.com</p>
                <p><a className="portfolio" href="https://jasonsips.github.io/Portfolio/"><button className="button1">Portfolio</button></a></p>
              </div>
            </div>
          </div>

          <div className="column animated flipInY delay-12s">
            <div className="card">
              <img src="/assets/images/Myles.jpg" alt="Myles" style={{ width: '100%' }} />
              <div className="container">
                <h2>Myles</h2>
                <p className="title">Back-End Designer</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>myles.alcala@yahoo.com</p>
                <p><a className="portfolio" href="http://github.com/ma662"><button className="button1">Portfolio</button></a></p>
              </div>
            </div>
          </div>

          <div className="column animated flipInY delay-20s">
            <div className="card">
              <img src="/assets/images/Tristan.jpg" alt="Tristan" style={{ width: '100%' }} />
              <div className="container">
                <h2>Tristan</h2>
                <p className="title">Front-End Designer</p>
                {/* <p>Some text that describes me lorem ipsum ipsum lorem.</p> */}
                <p>Tristanmartin88@gmail.com</p>
                <p><a className="portfolio" href="https://smove50.github.io/portfolio/"><button className="button1">Portfolio</button></a></p>
              </div>
            </div>
          </div>

        </div>
      </div>

      <div class="container5">
        <footer class="footer">
          <h3>WEB-SITE DESIGNED & BUILT BY</h3>

          <h2 class="WE">TEAM AMBITIOUS</h2>
          <h4>ALL RIGHTS RESERVED.</h4>
        
        </footer>
      </div>

    </Fragment>

  );
}

export default Home;