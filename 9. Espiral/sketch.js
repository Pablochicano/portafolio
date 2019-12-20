let angle = 0;



function setup() {

  createCanvas(600, 750);
  background(200);

  sizeSlider = createSlider(1, 1440, 1440);
  sizeSlider.position(20, 20);
  widthSlider = createSlider(1, 30, 1, .1);
  widthSlider.position(20, 50);
  angleSlider = createSlider(1, 65, 1, .1);
  angleSlider.position(20, 80);
}


function draw() {
  background(250);
  size = sizeSlider.value();
  spiralWidth = widthSlider.value();
  angle = angleSlider.value();

  drawSpiral();
}

function drawSpiral() {
  oldX = width / 2;
  oldY = height / 2;

  for (let i = 0; i < size; i++) {
    newAngle = (angle / 10) * i;
    x = (width / 2) + (spiralWidth * newAngle) * sin(newAngle);
    y = (height / 2) + (spiralWidth * newAngle) * cos(newAngle);



    line(oldX, oldY, x, y);
    oldX = x;
    oldY = y;
  }
}