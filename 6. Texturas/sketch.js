let angle = 0;
let img;


function preload() {
  img = loadImage('giorgione.jpg');
  img2 = loadImage('K_ON__Hirasawa_Yui_1920x1080.jpg')
}

function setup() {
  createCanvas(400, 300, WEBGL);

  background(175);

}

function draw() {
  //background(random(255,0,0));
  Imagenes();


  //resetear();



}

function Imagenes() {
  push();
  rectMode(CENTER);
  //fill(0,0,255);
  rotateX(angle);
  rotateY(angle);
  rotateZ(angle);

  texture(img)
  rect(0, 0, 150, 150);
  angle += 0.010;
  pop();

  push();
  rectMode(CENTER);
  //fill(0,0,255);
  rotateX(-angle);
  rotateY(-angle);
  rotateZ(-angle);

  texture(img2)
  rect(0, 0, 150, 150);
  angle += 0.010;
  pop();


}

function mousePressed(){
clear();}

function resetear() {
  for (let i = 0; i < 100; i++) {
    if (i > 99) {
      clear();
      let i = 0;
      Imagenes();
       }
    
  }
}