let field;
let balls=[];
let count=100;
function setup() {
  createCanvas(600, 600);
  field=new flowfield(20,width,height);
  field.addVectors();
  for(let i=0;i<count;i++){
    balls.push(createVector(random(width),random(height)));
  }
  
}

function draw() {
  background(220);
  //field.show();
  for(let b of balls){
    circle(b.x,b.y,20);
    b.add(field.lookup(b.x,b.y));
    if(b.x<-20){
      b.x=width+20;
    }else if(b.x>width+20){
      b.x=-20;
    }
    if(b.y<-20){
      b.y=height+20;
    }else if(b.y>height+20){
      b.y=-20;
    }
  }
}