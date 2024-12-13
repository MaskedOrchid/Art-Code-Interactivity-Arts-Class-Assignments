class borb{
  constructor(x,y,vx,vy,av,ay,f){
    this.pos=createVector(x,y);
    this.velo=createVector(vx,vy);
    this.acc=createVector(av,ay);
    this.fric=f
  }
  update(){
    this.move();
    this.show();
    this.outBounds();
  }
  outBounds(){
    if(this.pos.y>height-15){
      this.pos.y=height-15;
      this.velo.y*=-this.fric;
    }
    if(this.pos.y<15){
      this.pos.y=15;
      this.velo.y*=-this.fric;
    }
    if(this.pos.x<15){
      this.pos.x=15;
      this.velo.x*=-this.fric;
    }
    if(this.pos.x>width-15){
      this.pos.x=width-15;
      this.velo.x*=-this.fric;
    }
  }
  move(){
    this.pos.add(this.velo);
    this.velo.add(this.acc);
    
  }
  show(){
    noStroke();
    fill(0)
    circle(this.pos.x,this.pos.y,30);
  }
}

let b;
function setup() {
  createCanvas(400, 400);
  b=new borb(width/2,20,1,0,0,0.1,.9);

}

function draw() {
  background(220);
  b.update();
 
}