let count = 5;// one less than the number on the canvas

let coloors = [
  "#D3B8A5",
  "#C3A38C",
  "#9C7E6E",
  "#61504B",
  "#4D4746",
  "#393E41",
  "#24353B",
  "#242F35",
  "#24282E",
  "#242128",
  "#231A21",
];
function setup() {
  createCanvas(400, 400);
  background("#171015");
}

function draw() {
  push();
  //rotates it to be on the side
  translate(0, 400);
  rotate((3 * PI) / 2);
  array();
  pop();
  //rotates it to be on the side
  push();
  translate(400, 0);
  rotate((-3 * PI) / 2);
  array();
  pop();
}

function array() {
  //arrays it across the canvas layering it down
  let xoffset = (width) / count;
  let limit = 3;
  let yoffset = (height/2)/ count ;

  for (let i = 0; i < count+1; i++) {
    for (let k = 0; k < limit; k++) {
      lines(i * xoffset, k * yoffset, 40, 120, 10,10);
    }
  }
}

function lines(x, y, lenx, leny, thick, num) {
  //creates a tower of lines
  strokeWeight(thick);
  let ygap = leny / num;
  let len = lenx / num;
  let index = num;

  for (let i = 0; i < coloors.length; i++) {
    //stroke(coloors[9 - i]);
    stroke(coloors[i]);
    line(x - lenx + index * len,y + i * ygap,x + lenx - index * len,y + i * ygap);
    index -= 1;
  }
}