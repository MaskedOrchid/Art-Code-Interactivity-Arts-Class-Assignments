//the star class to manage the start particles
//based on Nature of Code, Seek, and seperate examples
class Star{
  constructor(x,y){
    this.pos=createVector(x,y);
    this.maxforce=0.3;
    this.acc=createVector(0,0);
    this.velo=createVector(0,0);
    //what kind of star it is
    let temp=tempcolor();
    this.colors=temp[0];
    this.rad=temp[1];
    this.maxspeed=random((250-this.rad)/2);
  }
  move(target,stars){
    //applying steering forces
    let steer=this.seek(target);
    steer.mult(1);
    this.acc.add(steer);
    //applying seperation forces. 
    let space=this.spaceOut(stars);
    space.mult(2);
    this.acc.add(space);
    //moving
    this.velo.add(this.acc);
    this.velo.limit(this.maxspeed);
    this.pos.add(this.velo);
    //resetting for next cycle
    this.acc.mult(0);
  }
  seek(target){
    //getting a vector pointing from current to target 
    let desired=p5.Vector.sub(target,this.pos);
    //normalling it and lengthing it to fit the max speed
    desired.normalize();
    desired.mult(this.maxspeed);
    //creating the ideal steer force for the desired vector
    let steerforce=p5.Vector.sub(desired,this.velo);
    steerforce.limit(0.2);
    return steerforce;
  }
  spaceOut(stars){
    let gap=this.r*2;
    let sum=createVector();
    let num=0;
    let d=0;
    
    for(let s in stars){
      d=p5.Vector.sub(this.pos, s.pos);
      if(this!=s && d<gap){
        //if the other star is too close add it to the sum
        d.setMag(1/d);
        sum.add(d);
        num+=1;
      }
    }
    if(num>0){
      //finding the average gap
      sum.div(num);
      sum.setMag(this.maxspeed);
      //pointing the force in the right direction
      sum.sub(this.velo);
      sum.limit(this.maxforce);
    }
    return sum;
    
  }
  show(){
    noStroke();
    fill(this.colors.x,this.colors.y, this.colors.z,0.25);
    circle(this.pos.x,this.pos.y,this.rad+10);
    fill(this.colors.x,this.colors.y, this.colors.z,0.50);
    circle(this.pos.x,this.pos.y,this.rad+5);
    fill(this.colors.x,this.colors.y, this.colors.z,1);
    circle(this.pos.x,this.pos.y,this.rad);
    fill(this.colors.x,this.colors.y,90,0.9);
    if(this.rad-10<2.5){
     circle(this.pos.x,this.pos.y,2.5); 
    }else{
      circle(this.pos.x,this.pos.y,this.rad-10); 
    }
    

  }
}

function tempcolor(){
  //this function uses the temp to type of star chart to create a pattern to the generation of stars
  let kelvin=random(2,31);
  let tempcolor=createVector(0,100,0);
  let lumi=0;
  let r=0;
  //has to get this or less to be a giant
  let superpercent=0;
  if(kelvin<=5){
    //reds
    superpercent=5
    lumi=random(50,60)
    tempcolor.x=random(51);
  }else if(5<=kelvin && kelvin<=8){
    //oranges
    superpercent=3
    lumi=random(50,80)
    tempcolor.x=random(9,51);
  }else if(8<kelvin && kelvin<=12){
    //yellows/whites
    superpercent=2
    lumi=random(50,80)
    tempcolor.x=random(39,51);
  }else if(12<kelvin && kelvin<=20){
    //blues/whites
    superpercent=2
    lumi=random(60,90)
    tempcolor.x=random(160,171);
  }else if(20<kelvin && kelvin<=30){
    //blues
    superpercent=4
    lumi=random(60,90)
    tempcolor.x=random(179,200);
  }else{
    //super blues
    superpercent=6
    lumi=random(60,80)
    tempcolor.x=random(190,250);
  }
  tempcolor.z=lumi;
  //setting the radius
  if(random(10)<=superpercent){
    r=floor(random(29,51));
  }else{
    r=floor(9,25);
  }
  return [tempcolor,r];
}