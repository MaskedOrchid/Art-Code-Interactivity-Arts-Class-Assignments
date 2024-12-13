let xoffset;
let yoffset;
let randtime=0;
let total=0;
let timejump=0;
let dirct=true;
let seconds=5;
let timer=0;
let prog=0;
let yes=false;
let count=20;
let limit=2;
let rate=15;
function setup() {
  createCanvas(400, 200);
  angoff=PI/3
  frameRate(rate)
  colorMode(HSB)
  randotime=0;
  xoffset=width/count;
  yoffset=height/limit;
}

function draw() {
  background(0);
  if(randotime==0){
    //if it is time to reset
    if(yes){
      yes=false;
      //setting a random time to do the task
      randotime=floor(random(4*rate));
      total=randotime;
      //reseting the direction
      if(dirct){
        dirct=false;
      }else{
        dirct=true;
      }
    }else{
      //if it is time to move set it to how long it takes the animation to run
      yes=true;
      randotime=seconds*rate;
    }
  }else{
    //substracting the time to switch direction 
    randotime-=1;
  }
  //getting the current progress
  let t=map(randotime,0,total,0,1);
  if(yes){
    //setting color based off of the progress
    stroke(total-(total-randotime),50,80);
    lines(10,dirct);
    stroke(total-(total-randotime),25,100);
    lines(5,dirct);
  }else{
    stroke(total-(total-randotime),50,80);
    lines(1,dirct);
    stroke(total-(total-randotime),25,100);
    lines(0.5,dirct);
  }

}

function lines(l, right){
  //drawing the lines and letting them move
  if(right){
    for(let x=0;x<count+1;x++){
      strokeWeight(20)
      moves(2*x*xoffset, 0,l);
      strokeWeight(10)
      moves(x*xoffset, 1*yoffset,l);
      strokeWeight(20)
      moves(2*x*xoffset, 2*yoffset,l);
    }
  }else{
    for(let x=count;x>=0;x--){
      strokeWeight(20)
      moves(2*x*xoffset, 0,l);
      strokeWeight(10)
      moves(x*xoffset, 1*yoffset,l);
      strokeWeight(20)
      moves(2*x*xoffset, 2*yoffset,l);
    }
  }
  
}
       
function moves(x,y,len){
  //setting the len based of the distance to ease into it
  const timestep=seconds/len;
  let t=map(timer,0,seconds,0,1);
  timer+=timestep;
  if(timer>=seconds){
    timer=0;
  }
    line(x,y+(len*easeShrinkFunction(t)),x,y-(len*easeShrinkFunction(t)));
  
}


function easeShrinkFunction(x) {
    if (x < 0.5) {
      //1-(-2*x+2)^3/2
        return 1 - Math.pow(-2 * x + 2, 3) / 2
    } else {
      //4*x^3
        return 4 * x * x * x;
    }
}
