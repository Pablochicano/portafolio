function setup() {
  createCanvas(400, 400);
  fill(255, 110);
  strokeWeight(.25);
}

function draw() {
  background(220);
  let niveles = round(map(mouseX, 0, width, 0, 8));
  recursiveCircle(width/2, height/2, 400, niveles);
}

function recursiveCircle(x, y, diam, levels){
  ellipse(x, y, diam);
   
  if(levels > 1){
    rotate(1);
    recursiveCircle(x-diam/6, y, diam/2, levels-1);
    rotate(1);
    recursiveCircle(x+diam/6, y, diam/2, levels-2);
   /* rotate(PI / 3.0);
    recursiveCircle(y-diam/4, x, diam/2, levels-1);
    rotate(PI / 3.0);
    recursiveCircle(y+diam/4, x, diam/2, levels-1);*/
  }
}