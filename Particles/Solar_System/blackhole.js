class blackhole extends solarobject{
    constructor(m,x,y){
      super(m,x,y);
      this.colors=createVector(random(61),90,80);
      this.rad=floor(random(10,20));
      this.lifespan=0;
    }
    update(objects){
      //updates the current acceleration with the given forces
      let gf=this.gravity(objects);
      //how strong the grav force is
      gf.mult(0.005);
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
          //multiplying by
          //the gforce felt
          direct.mult(gf);
          sum.add(direct);
          count+=1;
          //if something collides with the blackhole
          if(0<=d && d<=this.rad+10){
            if(o instanceof blackhole){
              //if it if another blackhole, compare masses
              if(this.mass<o.mass){
                this.collid=true;
              }else{
                console.log("NOMNOMNOM")
                console.log("Old mass: ",this.mass);
                o.collid=true;
                this.mass+=o.mass;
                this.rad+=10;
              }
            }else{
              //sucked in something not a black hole
              o.collid=true;
              this.mass+=o.mass;
              this.rad+=10;
            }
            console.log("New mass: ",this.mass)
            
          }
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
    checklife(){
      if(this.mass>2500){
        //only gets a lifespan until after it reaches a certain mass
        //normally would not, but I wanted to not have 
        //a giant blackhole staying on screen forever
        if(this.lifespan==0){
          this.lifespan=150;
        }else{
          //fading effect
          this.lifespan-=1;
          this.colors.z-=0.75;
          this.rad-=(10);
          if(this.lifespan==0){
            return false;
          }
        }
      }else if(this.collid){
        //if it got sucked up by another blackhole
        return false;
      }
      return true;
    }
    show(){
      noStroke();
      fill(this.colors.x,this.colors.y,this.colors.z,0.25);
      circle(this.pos.x,this.pos.y,this.rad+50);
      fill(this.colors.x+5,this.colors.y,this.colors.z,0.50);
      circle(this.pos.x,this.pos.y,this.rad+25);
      fill(this.colors.x+10,this.colors.y,this.colors.z,0.50);
      circle(this.pos.x,this.pos.y,this.rad+10);
      fill(this.colors.x,this.colors.y,this.colors.z+100,0.75);
      circle(this.pos.x,this.pos.y,this.rad+5);
      fill(0,0,0);
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