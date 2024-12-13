class solarobject{
    constructor(m,x,y){
      this.mass=m;
      console.log(this.mass)
      this.pos=createVector(x,y);
      this.velo=createVector(0,0);
      this.acc=createVector(0,0);
      this.maxforce=0.9;
      this.maxspeed=3;
      this.colors=createVector(random(360),80,90);
      this.rad=randomGaussian(10);
      this.lifespan=500;
      this.collid=false;
    }
    update(objects){
      //updates the current acceleration with the given forces
      let gf=this.gravity(objects);
      //how strong the grav force is
      gf.mult(1.5);
      this.acc.add(gf);
    }
    gravity(objects){
      let sum=createVector(0,0);
      let count = 0;
      for(let o of objects){
         let d = p5.Vector.dist(this.pos, o.pos);
        if(this!=o && d>=10){
          //calculating the gravitional force
          let gf=getGForce(this.mass, o.mass,d);
          //the vector pointing from this to other object
          let direct=p5.Vector.sub(o.pos,this.pos);
          //direct.normalize();
          //multiplying by the gforce felt
          direct.mult(gf);
          sum.add(direct);
          count+=1;
        }
      }
      if(count>0){
        sum.div(count);
        //setting to the maxniums
        sum.setMag(this.maxspeed);
        //using Reynolds
         sum.sub(this.velo);
        sum.limit(this.maxforce);
      }
      return sum;
    }
    move(){
      // Updating velocity
      this.velo.add(this.acc);
      // Limit speed to reduce how hectic
      this.velo.limit(this.maxspeed);
      //moving
      this.pos.add(this.velo);
      // resetting acceleration
      this.acc.mult(0);
    }
    checklife(){
      //general lifespan
      if(this.lifespan<=0){
        return false;
      }
      this.lifespan-=1;
      //fade out once near death
      if(this.lifespan<=50){
        this.colors.z-=1;
      }
      return true;
    }
    pos(){
      return this.pos;
    }
    mass(){
      return this.mass;
    }
    nova(){
      return this.nova;
    }
    borders(){
      //to check to make sure it is within bounds
      if(this.pos.x<-this.rad || this.pos.x>width+this.rad){
        return false;
      }else if(this.pos.y<-this.rad || this.pos.y>height+this.rad){
        return false;
      }
      return true;
    }
    show(){
      noStroke();
      fill(this.colors.x,this.colors.y, this.colors.z);
      circle(this.pos.x,this.pos.y,this.rad);
    }
  }
    
  function getGForce(m1,m2,r){
    //Newton's law of universal gravitation
      const G=6.674*pow(10,-11);
      let r2=pow(r,2);
      let fg=G*((m1*m2)/r2);
      return fg;
    }