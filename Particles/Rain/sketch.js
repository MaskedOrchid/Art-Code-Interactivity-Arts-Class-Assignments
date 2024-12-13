class droplet{
  constructor(r,l){
    this.rad=r;
    this.len=l;
    this.timer=0;
    this.prog=0
    this.seconds=4;
  }
  rad(){
    return this.rad;
  }
  len(){
    return this.len;
  }
  drawshape(x,y){
    //draws the shape from the center peice
    noStroke();
    bezier(x-(this.rad/2),y,x+(this.rad/2),y-(this.len),x-(this.rad/2),y-(this.len),x+(this.rad/2),y);
    circle(x,y,this.rad);
  }
  
  moves(x,y,endy){
    let disty=endy-y;
    const timestep=this.seconds/disty
    let t=map(this.timer, 0, this.seconds,0,1);
    this.prog=easeFunction(t);
    this.timer+=timestep;
    if(this.timer>=this.seconds){
      this.timer=0;
    }
    fill(200*this.prog,5,50*this.prog);
    this.drawshape(x,y+(disty*this.prog));
  }
}
let rain=[];
let count=50;
let xoffset=0;
function setup(){
  createCanvas(400, 400);
  colorMode(HSB);
  //frameRate(24);
  xoffset=width/count;
  for(let i=0;i<count+1;i++){
    let r=random(50);
    rain[i]=new droplet(r,random(100)+r);
  }
}

function draw() {
  noStroke();
  background(220,15,20);
  circles();
  for(let i=0;i<count+1;i++){
    let starty=0-(rain[i].rad/2)
    let endy=height+rain[i].rad+rain[i].len;
    rain[i].moves(i*xoffset,starty,endy)
  }
}

function circles(){
  let rad=100;
  let num=height/(rad/2);
  let numx=width/(rad/2);
  for(let y=-1;y<num+1;y++){
    fill(220-(y*10),15,20+(y*10))
    for(let x=0;x<numx+1;x++){
      circle((rad/2)*x,(rad/2)*y,rad);
    }
  }
}

function easeFunction(x) {
    let result = 0;
     if(x<=0){
      return 0;
    }else{
      return pow(2, 20*x-8)
    }
    
}

