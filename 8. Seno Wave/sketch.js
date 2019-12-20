let xspacing = 16; // Distancia entre cada posición horizontal
let w; // Ancho total de la onda
let theta = 0.0; // El ángulo parte en 0
let amplitude = 75.0; // Altura de la onda
let period = 500.0; // Pixeles antes de que se repita la onda
let dx; // Valor de incremento de x
let yvalues; // Array para guardar los valores de altura de la onda

let word = ['W A V E  I T'];
let fontRegular;

let img;

let rSlider, gSlider, bSlider;

function preload() {
  img = loadImage('eye.jpg.jpg');
  fontRegular = loadFont('OldLondon.ttf');
}

function setup() {
  createCanvas(400, 400);
  //createCanvas(400, 400, WEBGL); 3D para texturas
  w = width + 16;
  dx = (TWO_PI / period) * xspacing;
  yvalues = new Array(floor(w / xspacing));


  rSlider = createSlider(0, 255, 100);
  rSlider.position(270, 420);
  gSlider = createSlider(0, 255, 0);
  gSlider.position(270, 440);
  bSlider = createSlider(0, 255, 255);
  bSlider.position(270, 460);

}

function draw() {
  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  background(b,r,g);
  //background(0);
  calcWave();
  
  renderWave1();
  colorsliders();
  renderWave2();
  //colorsliders();
}

function calcWave() {
  // Incrementa theta (probar 
  //distintos valores para incrementar la velocidad angular de theta aquí)

  theta += 0.02;
  //theta += 0.1;

  // For every x value, calculate a y value with sine function
  let x = theta;
  for (let i = 0; i < yvalues.length; i++) {
    yvalues[i] = sin(x) * amplitude;
    x += dx;
  }
}

function renderWave1() {
  noStroke();
  fill(255);
  // Manera simple de dibujar las ondas con un elipse en cada posición
  for (let x = 0; x < yvalues.length; x++) {


    ellipse(height / 2 + yvalues[x], x * xspacing, 16, 16);
    ellipse(height / 4 - yvalues[x], x * xspacing, 16, 16);
    //ellipse(height / 2 - yvalues[x] / 2, x * xspacing, 16, 16);
    //ellipse(height / 4 + yvalues[x] / 2, x * xspacing, 16, 16);

  }
}

function renderWave2() {
  noStroke();
  fill(255);
  // Manera simple de dibujar las ondas con un elipse en cada posición
  for (let x = 0; x < yvalues.length; x++) {


    //ellipse(height / 2 + yvalues[x], x * xspacing, 16, 16);
    //ellipse(height / 4 - yvalues[x], x * xspacing, 16, 16);
    ellipse(height / 2 - yvalues[x] / 2, x * xspacing, 16, 16);
    ellipse(height / 4 + yvalues[x] / 2, x * xspacing, 16, 16);

  }
}
function colorsliders() {

  const r = rSlider.value();
  const g = gSlider.value();
  const b = bSlider.value();
  
  push();
  fill(r, g, b);
  textSize(50);
  textFont(fontRegular);
  text(word, 100, 200);
  pop();
  
}

