class flowfield{
    constructor(res,w,h){
      this.resu=res;
      this.cols=w/res;
      this.rows=h/res;
      this.array=new Array(this.cols);
      for(let i=0;i<this.cols;i++){
        this.array[i]=new Array(this.rows);
      }
    }
    addVectors(){
      let xoff=0;
      for(let c=0;c<this.cols;c++){
        let yoff=0;
        for(let r=0;r<this.rows;r++){
          let angle=map(noise(xoff,yoff),0,1,0,2*PI);
  
          this.array[c][r]=p5.Vector.fromAngle(angle);
          yoff+=0.1;
        }
        xoff+=0.1;
      }
    }
    lookup(x,y){
      let column=constrain(floor(x/this.resu),0,this.cols-1);
      let row=constrain(floor(y/this.resu),0,this.rows-1);
      return this.array[column][row];
    }
    
    show(){
      for(let c=0;c<this.cols;c++){
        for(let r=0;r<this.rows;r++){
          let x=c*this.resu;
          let y=r*this.resu;
          let linex=x;
          let liney=y+this.resu/2
          square(x,y,this.resu);
          strokeWeight(2);
          line(linex,liney, linex+(this.array[c][r].x*this.resu)/2,liney+(this.array[c][r].y*this.resu)/2)
        }
      }
    }
  }