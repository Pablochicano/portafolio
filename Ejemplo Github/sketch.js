let count = 1; //contador para usar si es par o impar

function setup() {
  createCanvas(600, 600);
  background(0);
  
}

function draw() {
  
  textSize(50);
  textAlign(CENTER);
  text('Clickeame',300,250);
  fill(255);
 
}

function mousePressed(){
stamp(mouseX,mouseY);
}

function stamp(x,y){
  //si el contador es par dibuja una x
textSize(32)
  let s = '¡Gracias! ahora prueba programar algo tu ;)';
    fill(255);
  textAlign(CENTER);
text(s, 200, 300, 200, 200); // Text wraps within text box
 
} //reinicio del contador