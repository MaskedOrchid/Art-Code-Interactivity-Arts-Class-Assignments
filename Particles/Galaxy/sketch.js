let cycle;
let angle;
let stars=[];
let target;
let count=100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  
  angle=0;
  colorMode(HSL)
  for(let i=0;i<count;i++){
    stars.push(new Star(random(-100,width+100),random(-100,height+100)));
  }
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0,0,0);
  //having an invisible dot be the object that the stars seek towards
 cycle=createVector(width/2,height/2, width/4);
  let noix=noise(0.005 * frameCount);
  let noiy=noise(0.005 * frameCount + 10000)
  //having it cycle around in a circle-ish shape
  target=createVector(cycle.x+cycle.z*cos(angle)*noix,cycle.y+cycle.z*sin(angle)*noiy);
  //stroke(0,0,100);
  //strokeWeight(10)
  //point(target.x,target.y)
  //noFill();
 // circle(width/2,height/2,width/4);
  //itering the angle
  angle+=PI/120;
  //setting it to zero to restart
  if(angle>2*PI){
    angle=0;
    let i=random(0,count);
    stars[i]=new Star(random(-100,width+100),random(-100,height+100));
  }
  //moving stars
  for(let s of stars){
    s.move(target,stars);
    s.show();
  }
}