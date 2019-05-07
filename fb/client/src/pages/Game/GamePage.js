import React from 'react';
// { Component, Fragment }


// import "./style.css";

// class ColorPicker extends React.Component {
//   constructor(props) {
//      super(props);
  
//      this.colorPickerRef = React.createRef();
//   }
  
//   componentDidMount() {
//      this.context = this.colorPickerRef.current.getContext('2d');
//   }
  
//   render() {
//      return (
//         <canvas ref={this.colorPickerRef} />
//      )
//   }
// }


class GamePage extends React.Component {
  componentDidMount() {


    // var canvas = document.createElement('canvas');

    // canvas.id = "canvas";
    // canvas.width = 1224;
    // canvas.height = 768;
    // canvas.style.zIndex = 8;
    // canvas.style.position = "absolute";
    // canvas.style.border = "1px solid";


    // Game.run();
  //   var cvs = document.getElementById("canvas");
  //   var ctx = cvs.getContext("2d");

  //   // load images
  //   var bird = new Image();
  //   var bg = new Image();
  //   var fg = new Image();
  //   var pipeNorth = new Image();
  //   var pipeSouth = new Image();

  //   bird.src = "/images/flappy/bird.png";
  //   bg.src = "/images/flappy/bg.png";
  //   fg.src = "/images/flappy/fg.png";
  //   pipeNorth.src = "/images/flappy/pipeNorth.png";
  //   pipeSouth.src = "/images/flappy/pipeSouth.png";

  //   // some variables
  //   var gap = 85;
  //   var constant;

  //   var bX = 10;
  //   var bY = 150;

  //   var gravity = 1.5;

  //   var score = 0;

  //   // audio files
  //   var fly = new Audio();
  //   var scor = new Audio();

  //   fly.src = "sounds/fly.mp3";
  //   scor.src = "sounds/score.mp3";

  //   // on key down
  //   document.addEventListener("keydown",moveUp);

  //   function moveUp(){
  //       bY -= 25;
  //       fly.play();
  //   }

  //   // pipe coordinates

  //   var pipe = [];

  //   pipe[0] = {
  //       x : cvs.width,
  //       y : 0
  //   };

  //   // draw images

  //   function draw(){
        
  //       ctx.drawImage(bg,0,0);
  //       for(var i = 0; i < pipe.length; i++){
            
  //           constant = pipeNorth.height+gap;
  //           ctx.drawImage(pipeNorth,pipe[i].x,pipe[i].y);
  //           ctx.drawImage(pipeSouth,pipe[i].x,pipe[i].y+constant);
                
  //           pipe[i].x--;
            
  //           if( pipe[i].x == 125 ){
  //               pipe.push({
  //                   x : cvs.width,
  //                   y : Math.floor(Math.random()*pipeNorth.height)-pipeNorth.height
  //               }); 
  //           }

  //           // detect collision
            
  //           if( bX + bird.width >= pipe[i].x && bX <= pipe[i].x + pipeNorth.width && (bY <= pipe[i].y + pipeNorth.height || bY+bird.height >= pipe[i].y+constant) || bY + bird.height >=  cvs.height - fg.height){
  //               // this.location.reload(); // reload the page
  //               console.log("an event is happening");
  //           }
            
  //           if(pipe[i].x == 5){
  //               score++;
  //               scor.play();
  //           }
            
            
  //       }

  //       ctx.drawImage(fg,0,cvs.height - fg.height);
        
  //       ctx.drawImage(bird,bX,bY);
        
  //       bY += gravity;
        
  //       ctx.fillStyle = "#000";
  //       ctx.font = "20px Verdana";
  //       ctx.fillText("Score : "+score,10,cvs.height-20);
        
  //       requestAnimationFrame(draw);
  //   }
  //   draw();
 
  }
  render() {
    return(
      <canvas id="canvas" ref={(c) => this.context = c.getContext('2d')} width="288" height="512"
      style={{border: "2px solid green"}}></canvas>
      );
  }
}

export default GamePage;