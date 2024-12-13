class stars extends solarobject{
  constructor(m,x,y){
    super(m,x,y);
    let temp=tempcolor(m)
    this.colors=temp[0];
    this.rad=temp[1];
    this.lifespan=temp[2];
    this.nova=false;
    this.lightspan=20;
  }
  checklife(){
    if(this.lifespan<=0){
      let chance=floor(random(101));
      if(!this.nova && chance<=50){
        //adding neutron star death behavoir
        console.log("I AM EXPLODING!");
        this.mass*=2;
        this.rad*=1.5;
        this.lightspan*=2;
        this.lifespan=100;
        this.colors.y+=25;
        this.colors.z=80;
        this.nova=true;
        return true;
      }
      return false;
    }else if(this.collid){
      //if the star got sucked into the blackhole
      console.log("I AM SUCKED IN!");
      return false;
    }
    //if the star is still alive take a tick off
    this.lifespan-=1;
    if(this.lifespan<=75){
      //to create the fade to black effect
      this.colors.y+=1;
      this.colors.z-=1;
    }
    return true;
  }
  show(){
    noStroke();
    let t=0;
    if(this.nova){
      t=0.05;
    }
    fill(this.colors.x,this.colors.y,this.colors.z,0.25-t);
    circle(this.pos.x,this.pos.y,this.rad+this.lightspan);
    
    fill(this.colors.x,this.colors.y,this.colors.z,0.50-t);
    circle(this.pos.x,this.pos.y,this.rad+this.lightspan-10);
    
    fill(this.colors.x,this.colors.y,this.colors.z,1-t);
    circle(this.pos.x,this.pos.y,this.rad);
    
    fill(this.colors.x,this.colors.y,this.colors.z+5,1-t);
    circle(this.pos.x,this.pos.y,this.rad-this.lightspan+10);
    
    fill(this.colors.x,this.colors.y,this.colors.z+10,1-t);
    circle(this.pos.x,this.pos.y,this.rad-this.lightspan);
    if(this.nova){
      fill(0,0,100);
      circle(this.pos.x,this.pos.y,5);
    }
  }
  
}

function tempcolor(m){
  //this function uses the temp to type of star chart to create a pattern to the generation of stars
  let kelvin=random(2,31);
  let tempcolor=createVector(0,100,0);
  let lumi=0;
  let r=0;
  //has to get this or less to be a giant
  let superpercent=0;
  let t=map(m,0,100,0,10);
  let life=500;
  superpercent+=floor(t);
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
  let l=map(lumi,0,100,0,1);
  life+=l*100;
  //setting the radius 
  if(random(10)<=superpercent){
    r=floor(random(50,m));
  }else{
    r=floor(50,m/2);
  }
  return [tempcolor,r,life];
}

function getGForce(m1,m2,r){
  //Newton's law of universal gravitation
    const G=6.674*pow(10,-11);
    let r2=pow(r,2);
    let fg=G*((m1*m2)/r2);
    return fg;
  }