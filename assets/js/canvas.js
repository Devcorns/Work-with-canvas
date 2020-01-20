var mouseCtx = null;
var canvas = document.getElementById("custom-canvas-for-draw");
var ctx = canvas.getContext("2d");
ctx.strokeStyle = '#f00';
canvas.width = 200;
canvas.height = 100;
var backgroundImg = new Image();
backgroundImg.src = "http://i.imgur.com/yf6d9SX.jpg";
backgroundImg.onload = function(){
    ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height);   
}
ctx.save();

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
  mouseCtx = document.getElementById("custom-canvas-for-draw").getContext("2d");

  mouseCtx.beginPath(); // begin

  mouseCtx.lineWidth = 1;
  mouseCtx.lineCap = 'round';
  mouseCtx.strokeStyle = '#fff';

  mouseCtx.moveTo(pos.x, pos.y); // from
  setPosition(e);
  mouseCtx.lineTo(pos.x, pos.y); // to

  mouseCtx.stroke(); // draw it!
}

function drawEraser () {
  var cordinate = [];
  canvas.addEventListener('mousedown',function(e){
    setPosition(e)
    cordinate = [pos.x,pos.y]
    console.log("first cordinate",cordinate);
  });
  canvas.addEventListener('mouseup',function(e){
    setPosition(e)
    cordinate = [...cordinate,pos.x,pos.y]
    console.log("with last  cordinate",cordinate);
    createEraser(cordinate);
  });

  function createEraser(getCordinate) {
    mouseCtx.save();
    mouseCtx.beginPath();
    mouseCtx.strokeStyle = '#fff';
    mouseCtx.lineWidth = 0;
    mouseCtx.fillStyle = "#fff";
    
    console.log(getCordinate[0],getCordinate[1],getCordinate[2]-getCordinate[0],getCordinate[3]-getCordinate[1]);
    
    //rectCanvas.fillRect(getCordinate[0],getCordinate[1],getCordinate[2]-getCordinate[0],getCordinate[3]-getCordinate[1])
    mouseCtx.rect(getCordinate[0],getCordinate[1],getCordinate[2]-getCordinate[0],getCordinate[3]-getCordinate[1]);
    mouseCtx.clearRect(getCordinate[0],getCordinate[1],getCordinate[2]-getCordinate[0],getCordinate[3]-getCordinate[1]);
    mouseCtx.stroke();
    mouseCtx.restore();
    
  }
}


function removeListener() {
  canvas.removeEventListener('mousemove', drawShapeUsingMouse);
  canvas.removeEventListener('mousedown', setPosition);
}

function  resetAll() {
  ctx.clearRect(0,0,canvas.width,canvas.height);
  ctx.drawImage(backgroundImg,0,0,canvas.width,canvas.height);
}


function creatEraser() {
  removeListener();
  drawEraser();
}