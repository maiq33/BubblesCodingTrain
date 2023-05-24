let bubbles = [];


function setup() {
  createCanvas(600, 400);
  bubbles[0] = new Bubble(200,200,100);
  bubbles[1] = new Bubble(400,200,100);
  
}

function mousePressed(){
    let r = random(20,50);
    let b = new Bubble(mouseX,mouseY,r);
    bubbles.push(b);
  }

function draw() {
  background(0);
  
  let d = dist(bubbles[0].x,bubbles[0].y,bubbles[1].x,bubbles[1].y);
  if (d < bubbles[0].r+bubbles[1].r){
    
    background(200,0,100);
    
  }
  
    for (let i=0;i<bubbles.length;i++){
    bubbles[i].show();  
    bubbles[i].move();
  
    }
  
  }