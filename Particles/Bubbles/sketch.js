class Bubble{
  constructor(x,radius, speed){
    this.x=x;
    this.y=height;
    this.totalrad=radius;
    this.radius=radius;
    this.speed=speed;
  }
  show(){
    circle(this.x,this.y,this.radius)
  }
  move(){
    if(this.y<-this.radius/2){
      this.y=height;
      this.radius=this.totalrad;
      if(this.x<0 || this.x>width){
        this.x=xoffset*floor(0,count+1);
      }
    }
    this.y-=this.speed;
    let t=map(this.radius,0,this.totalrad,0,1);
    //this.x+=cosine(t);
    this.x+=noise(this.y,this.radius*0.01)*10*(cosine(t))
    //console.log("X:",this.x);
    if(this.radius>0){
      this.radius-=this.speed/10
    }
  }
}

let bubbles=[]
let xoffset=0;
let angle=0;
let count=10;
function setup() {
  createCanvas(400, 400);
  xoffset=width/count;
  angle=4*PI;
  for(let i=0;i<count+1;++i){
    bubbles[i]=new Bubble(xoffset*i,random(49,100),floor(random(1,5)));
  }
}

function draw() {
  background(220);
  for(let i=0;i<count+1;++i){
    bubbles[i].show();
    bubbles[i].move();
  }
}
function cosine(x){
  return cos((x*angle));
}


function sine(x){
  return sin((x*PI/2));
}