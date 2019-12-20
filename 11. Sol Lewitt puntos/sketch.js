let posX = [];
let posY = [];
let rot = [];

let m = 50;

function setup() {
  createCanvas(800, 500);
  noLoop();

  for (let i = 0; i < 10000; i++) {
    posX.push(random(m, width - m));
    posY.push(random(m, height - m));
    rot.push(random(TWO_PI));
  }
  //console.log(posX);
}

function draw() {
  background(220);

  
    for (let i = 0; i < 10000; i++) {
      push();

      translate(posX[i], posY[i]);

      rotate(rot[i]);
      line(-20, 0, 20, 0);

      pop();
if(mouseIsPressed){
meteleRuido();
}

    }
  }
