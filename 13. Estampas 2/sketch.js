let count = 1; //contador para usar si es par o impar

function setup() {
  createCanvas(600, 600);
  background(random(255),random(255),random(255),random(255));
  img = loadImage('imagenes/papercrane.png');
}

function draw() {
  
 
}

function mousePressed(){
stamp(mouseX,mouseY);
}

function stamp(x,y){
  //si el contador es par dibuja una x

    push();
  
    translate(-50,-50);
      image(img, x, y, 100, 100);
  
    pop();
 
} //reinicio del contador
