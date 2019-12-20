let count = 1; //contador para usar si es par o impar

function setup() {
  createCanvas(600, 600);
  background(255);
}

function draw() {
  
  strokeWeight(5);
  line(200,0,200,600);
  line(400,0,400,600);
  line(0,200,600,200);
  line(0,400,600,400);
  //background(220);
}

function mousePressed(){
stamp(mouseX,mouseY);
}

function stamp(x,y){
  if(count % 2 === 0){ //si el contador es par dibuja una x

    push();
    translate(-50,-50);
    line(x,y,x+100,y+100);
    line(x,y+100,x+100,y);
    pop();
    print("turno o");
    
   

  } else { //si el contador es impar dibuja una y
  ellipse(x,y,100,100); 
    print("turno x");
   
  }
  count++; // le suma uno al contador por cada loop
  if(count == 11){ //si el contador es igual a 11 se reinicia el juego
  clear();
  redraw;
  count = 1;} //reinicio del contador
}