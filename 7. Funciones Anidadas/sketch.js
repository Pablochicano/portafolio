let img;

function preload() {
  img = loadImage('giorgione.jpg');
}

function setup() {
  createCanvas(400, 400, WEBGL);
  
}

function draw() {
  //background(random(255),random(255),random(255),random(255));
  background(color('#ff71ce'));
  //nostroke();

  let numX = 13; // número de elementos en X´
  let numY = 13; // número de elementos en Y´

  let m = 40; // margen

  // calculo los espaciadores de x e y
  let spx = (width - 2 * m) / (numX - 1);
  let spy = (height - 2 * m) / (numY - 1);

  for (let y = 0; y < numY; y++) {
    for (let x = 0; x < numX; x++) {
      // calculo la distancia con el mouse
      let d = dist(mouseX, mouseY, m + x * spx, m + y * spy);
      // mapeo la distancia a un ángulo´
      let r = map(d, 0, width, 0, PI);
      //translate(-100,-100);
      circle(d - 200, r - 200, 10, 10);
      circle(r - 200, d - 200, 10, 10);
      texture(img);
      rect(-100, -100, d - 100, d - 100);

      if (x > 10) {
        circle(d - 180, r - 180, 10, 10);
        circle(r - 180, d - 180, 10, 10);
      } else {
        circle(d - 140, r - 140, 10, 10);
        circle(r - 140, d - 140, 10, 10);
      }
    }
  }
}