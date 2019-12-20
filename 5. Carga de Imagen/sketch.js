var img;

function preload(){
img = createImg('http://www.petwebsite.com/hamsters/hamsters_images/syrian-hamster_000008437184.jpg');
  createCanvas(200, 200);
}

function setup() {
  
  
  img.hide();
  //background(100);
  
}

function draw() {
  image(img, 0,0,width,height); 
  
}
