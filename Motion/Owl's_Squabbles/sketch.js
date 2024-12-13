    
  class Circle{
    constructor(r){
      this.rad=r;
      this.static=false;
      this.seconds=1;
      this.timer=0;
    }
    drawCircle(x,y,rad,t){
      circle(x,y,rad);
      //eyes
      fill(50,60,100)
      circle(x-40,y-30-(10*sine(t)),15);
      circle(x-10,y-30-(10*sine(t)),15);
      //pupils
      fill(50,60,10)
      circle(x-40,y-30-(10*sine(t)),10);
      circle(x-10,y-30-(10*sine(t)),10);
      //shine
      fill(100)
      circle(x-36,y-32-(10*sine(t)),5);
      circle(x-6,y-32-(10*sine(t)),5);
      //beak
      fill(40,60,60)
      triangle(x-30,y-20-(10*sine(t)),x-20,y-20-(10*sine(t)),x-25,y-10-(10*sine(t)))
      
    }
    grows(x,y,inc){
      //this function manages the circl's movement and the radius growing. 
      if(!this.static){
        const timestep=this.seconds/inc;
        let t=map(this.timer,0,this.seconds,0,1);
        this.timer+=timestep;
        if(this.timer>=this.seconds){
          this.timer=0;
          //if the time second restarts change the state of the bird
          if(second()==0){
              if(noise(1*0.01)==0){
              this.static=true;
            }
          }
        }
        this.drawCircle(x,y,this.rad+inc*sine(t),t)
      }else{
        this.drawCircle(x,y,this.rad)
        this.static=false;
        this.len=inc;
      }
      
    }
    static(){
      return this.static;
    }
    
  }
  let circl=[]
  let angle=0;
  let num=0;
  let numx=0;
  let rad=200;
  let count=0;
  let angry=100;
  function setup(){
    createCanvas(500, 500);
    colorMode(HSB);
    angle=2*PI;
    frameRate(20);
    num=height/(rad/2);
    numx=width/(rad/2);
    //frameRate(24);
    //creating all the circles of the owls
    for(let y=-1;y<num+1;y++){
      for(let x=0;x<numx+1;x++){
        circl.push(new Circle(rad));
        count+=1;
      }
    }
  }
  
  function draw() {
    noStroke();
    background(220,15,20);
    circles();
  }
  function circles(){
    //iterating the circles and making them hop and boil, and grow
    let i=0;
    for(let y=-1;y<num+1;y++){
      //fill(200-(y*10),20,20+(y*5))
      for(let x=0;x<numx+1;x++){
        if(i==count){
          i=0;
        }
        //getting the color to change as it moves through y and x
        fill(200-(y*10),20,40-(2.5*x))
        circl[i].grows((rad/2)*x,(rad/2)*y,random(angry)*noise(rad*0.01,frameCount));
        i+=1;
      }
    }
  }
  
  function sine(x ){
    //sine ease function
    return sin(x*angle);
  }