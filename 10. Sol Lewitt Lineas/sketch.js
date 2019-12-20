
let n = 1;
let i = 0;
let edge = 400;

let m=50;

function setup() {
  createCanvas(800, 500);
  strokeWeight(.2);
  stroke(0,50);
  noLoop();
}

function draw() {
  background(220);
  
  for(let i = 0; i < 10000; i++){
 
    push();
    let posX = random(m, width - m);
    let posY = random(m, height - m);
    
    
  
  
  translate(posX, posY);
    
  rotate(random(TWO_PI));
    line(-20,0,20,0);
    
    pop();
  
  
  }
}