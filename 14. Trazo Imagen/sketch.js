let foto;
var slider;

function preload() {
  foto = loadImage("Pablo_Chicano_Fotowiki.jpeg");
}


function setup() {
  createCanvas(foto.width, foto.height);
  rectMode(CENTER);
  noLoop();
}

let sp = 10; // spacer o "espaciador"

function draw() {
  background(0);
  noStroke();
  for (let y = 0; y < height; y += sp) {
    for (let x = 0; x < width; x += sp) {
      let col = foto.get(x, y);
      Trazo(x, y, col);
    }
  }
}

function Trazo(x, y, col) {
  let b = brightness(col);
  let r = red(col);
  let g = green(col);
  let bl = blue(col);
  let n = round(map(b, 0, 255, 40, 0));
  for (let i = 0; i < n; i++) {
    let nx = random(-sp, sp);
    let ny = random(-sp, sp);

    let c = color(bl, r, g);
    //let c = color((255,113,206), (1,205,254), (255,251,150));
    //let c = color( 255 - r, 255 - g, 255 - bl);
    fill(c);
    rect(x + nx, y + ny, 5, 10);
    //rotate(45);
  }

}

function keyTyped(){
if(key == 's' || key == 'S'){
save("foto.jpg");
}
}