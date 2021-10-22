let rx, ry;
let theta;
let BEGIN = -90;
let END = -270;
let MID = -180;
let r, g, b;
let bgr, bgg, bgb;
let coco, tree, grass, deer;
let inc = 0.1;
let opacity;

function preload() {
   coco = loadImage("assets/coconut.png");
   tree = loadImage("assets/tree.png");
   grass = loadImage("assets/grass.png");
   deer = loadImage("assets/deer.png");
 }
/* this api only called once */
function setup(){
   createCanvas(800,600);
  
  rx = 460;
  ry = 280;
  theta = BEGIN;
  r = 252;
  g = 150;
  b = 1;
  bgr = 0;
  bgg = 0;
  bgb = 0;
  opacity = 255;
}



function draw(){
  background(bgr, bgg, bgb);
  translate(width/2, height/2+100);
  theta -= inc;
  if(theta <= MID){
    r -= 0.03*inc;
    g -= 0.68*inc;
    b -= 0.7*inc;
    bgr -= 1.5*inc;
    bgg -= 2.28*inc;
    bgb -= 2.61*inc;
    opacity += 2.83*inc;
  } else{
    r += 0.03*inc;
    g += 0.68*inc;
    b += 0.7*inc;
    bgr += 1.5*inc;
    bgg += 2.28*inc;
    bgb += 2.61*inc;
    opacity -= 2.83*inc;
  }
  
  fill(r, g, b);
  noStroke();
  ellipse(rx*sin(radians(theta)), ry*cos(radians(theta)), 60, 60);
  if(theta <= END){
    theta = BEGIN;
    r = 252;
    g = 150;
    b = 1;
    opacity = 255;
  }
  
  image(grass, -width/2, 160, width, 40);
  image(coco, -250, -30, 240, 240);
  image(tree, 200, -40, 280, 240);
  image(deer, 40, 40, 160, 160);
  fill(0, 0, 0, opacity);
  rect(-400, -400, width, height);
  
}


