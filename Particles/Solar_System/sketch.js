let solarobjects=[];
let tinystar=[];
let count=100;
function setup() {
  createCanvas(windowWidth, windowHeight);
  colorMode(HSL);
  for(let i=0;i<count;i++){
    tinystar.push(createVector(random(width),random(height)));
  }
  
}

function draw() {
  background(0);
  let i=1;
  //to draw the tiny stars in the background
  for(let s of tinystar){
    i+=1;
    //using noise to make them flicker
    strokeWeight(noise(frameCount*0.001*i)*5);
    stroke(0,0,100);
    point(s.x,s.y);
  }
  //using filter to filter out dead, or outof bounds solarobjects
  solarobjects = solarobjects.filter(function(solarobjects) {
    return solarobjects.borders();
  });
  solarobjects = solarobjects.filter(function(solarobjects) {
    return solarobjects.checklife();
  });
  
  for(let p of solarobjects){
      p.update(solarobjects);
      p.move();
      p.show();
  }
}

function mousePressed() {
  //to have a small chance of spawing a blackhole versius the star
  let i=floor(random(101));
  if(i<=5){
    solarobjects.push(new blackhole(10,mouseX, mouseY))
  }else{
    let m=floor(random(10,500));
    solarobjects.push(new stars(m,mouseX, mouseY))
  }
}
