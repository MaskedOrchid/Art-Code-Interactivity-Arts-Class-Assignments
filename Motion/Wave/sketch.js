class bobs{
  //mostly a container class that holds the information of each circle
  constructor(nx,ny,nrad){
    this.x=nx;
    this.y=ny;
    this.rad=nrad;
  }
  x(){
    return this.x;
  }
  setx(nx){
    this.x=nx;
  }
  y(){
    return this.y
  }
  sety(ny){
    this.y=ny;
  }
  rad(){
    return this.rad;
  }
  setrad(nr){
    this.rad=nr;
  }
}

let points=[]
let offsetx;
let offsety;
let radmax;
let angoff
let limit=3;
let seconds=5;
let timer=0;
let count=10;
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  colorMode(HSB)
  settingmoves();
}

function settingmoves(){
  //setting the circles and their inital amount and state
  offsetx=width/count;
  radmax=height/count;
  offsety=height/count;
  angoff=2*PI/count;
  for(let i=0;i<count+1;i++){
   points[i]=new bobs(offsetx*i,10,radmax/2)
  }
}

function draw() {
 createCanvas(windowWidth, windowHeight);
 background(0,0,0);
 settingmoves();
 moves(0,200,100);
}


function moves(x,y,disty){
  //manages the movement based of sine and their x offset
  noStroke();
  const  timestep=seconds/disty;
  let t=map(timer,0,seconds,0,1);
  timer+=timestep;
  if(timer>=seconds){
    timer=0;
  }
  //how many I want to exist vertically 
  let kgap=height/limit;
  for(let k=-1;k<limit+1;k++){
    for(let i=0;i<count+1;i++){
      //drawing the circles and changing the color as sine values
      fill(250*sine(i,t),50,60);
      circle(points[i].x,points[i].y+(sine(i,t)*100)+(k*kgap),points[i].rad+sine(i,t)*radmax);
      fill(250*sine(i,t),50,100);
      circle(points[i].x,points[i].y+(sine(i,t)*100)+(k*kgap),points[i].rad+sine(i,t)*(radmax-radmax/4));
      fill(250*sine(i,t),25,100);
      circle(points[i].x,points[i].y+(sine(i,t)*100)+(k*kgap),points[i].rad+sine(i,t)*(radmax-radmax/2));
      fill(250*sine(i,t),10,100);
      circle(points[i].x,points[i].y+(sine(i,t)*100)+(k*kgap),points[i].rad*sine(i,t));
    }
  }
}

function sine(offnum,x ){
  //a sine ease function
  return sin((offnum*angoff)+(x*2*PI));
}