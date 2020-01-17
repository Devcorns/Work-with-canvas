var canvas = document.getElementById("custom-canvas-for-draw");
var ctx = canvas.getContext("2d");
canvas.width = 200;
canvas.height = 100;
var backgroundImg = new Image();
backgroundImg.src = "http://i.imgur.com/yf6d9SX.jpg";
backgroundImg.onload = function(){
    ctx.drawImage(backgroundImg,0,0);   
}

// last known position
var pos = { x: 0, y: 0 };

// apply event listner
canvas.addEventListener('mousemove', drawShapeUsingMouse);
canvas.addEventListener('mousedown', setPosition);
// document.addEventListener('mouseenter', setPosition);

//new position from mouse event
function setPosition(e) {
  pos.x = e.clientX;
  pos.y = e.clientY;
  console.log("setPosition fn",pos.x,pos.y);
}

// Functions 

function drawShapeUsingMouse(e) {
  // mouse left button must be pressed
  if (e.buttons !== 1) return;

  ctx.beginPath(); // begin

  ctx.lineWidth = 5;
  ctx.lineCap = 'round';
  ctx.strokeStyle = '#c0392b';

  ctx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  ctx.lineTo(pos.x, pos.y); // to

  ctx.stroke(); // draw it!
}

function drawEraser () {

  canvas.addEventListener('mousedown', setPosition);
  canvas.addEventListener('mouseup', setPosition);


  console.log(pos.x,pos.y);
 
  
  function createEraser() {
    ctx.beginPath();
    ctx.rect(20, 20, 150, 100);
    ctx.stroke();
  }
  function getFirstPosition() {
    console.log("get first Position works");
  }
  function getFirstPosition() {
    console.log("get second Position works");
  }
  // create Eraser();
}


function removeListener() {
  canvas.removeEventListener('mousemove', drawShapeUsingMouse);
  canvas.removeEventListener('mousedown', setPosition);
}



function creatEraser() {
  removeListener();
  drawEraser();
}