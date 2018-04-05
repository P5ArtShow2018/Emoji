
var eyeSize= 20;
var mouthSize = 100;


function setup() {
  createCanvas (400,400);
  
}

function draw() {
  background (200);
  
  //face
  fill (255,255,0);
  ellipse (200,200,300);
  
  //eyes
  fill (0);
  ellipse (160, 150, eyeSize);
  ellipse (250, 150, eyeSize);
  
  //mouth
  fill (255,0,0);
  ellipse (200,250, mouthSize);
  
}