let points = [];//stores the position of each circle, and their ID
let pointsmoves = [];//stores the x, y, direction and step size of each points
let pointrad = [];//the radius of each circle
let movecounters = [];// the number of moves each circle has before making a new choice
let count = 25;//total number of cicles
//the gaps between each ring
let bluegap;
let pinkgap;
let greengap;
let yellowblue = [
  "#FFEF78",
  "#FCDC68",
  "#F8C857",
  "#F5B446",
  "#F1A035",
  "#BE8637",
  "#8A6B39",
  "#57513B",
  "#3D443C",
  "#303D3D",
  "#2A3A3D",
  "#223033",
  "#1A2628",
  "#121C1E",
  "#0E1719",
];
let yellowpink = [
  "#FFECCA",
  "#FFE5B8",
  "#F1C1A9",
  "#E39D9A",
  "#CE6784",
  "#C6557C",
  "#AE4B6D",
  "#A24665",
  "#95405D",
  "#703146",
  "#5E293B",
  "#4B212F",
  "#3F1C27",
  "#32161F",
  "#190B10",
];
let yellowgree = [
  "#FFEBC2",
  "#ECE2B9",
  "#D8D9B0",
  "#C4D0A7",
  "#B0C69D",
  "#A6C397",
  "#9BBF91",
  "#87A881",
  "#739071",
  "#5F7961",
  "#495E4D",
  "#314035",
  "#253128",
  "#1C251E",
  "#131914",
];

function setup() {
  createCanvas(windowWidth, windowHeight);
  //randomSeed(3)
  frameRate(30);
  //background(0);
  fillpoints();
  //circles()
}

function draw() {
  createCanvas(windowWidth, windowHeight);
  background(0);
  
  //un/comment this to disable or enable movement
  //movepoints();
  circles();
  //console.log(movecounters);
}

function fillpoints() {
  //fills the points with the starting values
  for (let i = 0; i < count; i++) {
    points[i] = createVector(random(width + 1), random(height + 1), i);
    pointsmoves[i] = createVector(0, 0, random(5));
    pointrad[i] = randomGaussian(1, 10);
    movecounters[i] = random(0, 100);
  }
  bluegap = random(5, 20);
  pinkgap = random(5, 20);
  greengap = random(5, 20);
}
function movepoints() {
  let stepsize;
  for (let p = 0; p < count; p++) {
    if (movecounters[p] < 0) {
      //change direction to a random one
      let xmove = random(-2, 2);
      let ymove = random(-2, 2);
      pointsmoves[p] = createVector(xmove, ymove, random(5));
      movecounters[p] = random(25, 50);
    } else {
      movecounters[p] -= 1;
    }
    // if it collides with the left side
    if (points[p].x <= 0 && pointsmoves[p].x < 0) {
      pointsmoves[p].x *= -1;
    }
    if (points[p].y <= 0 && pointsmoves[p].y < 0) {
      pointsmoves[p].y *= -1;
    }
    //if it colldies with right side
    if (points[p].x >= width && pointsmoves[p].x > 0) {
      pointsmoves[p].x *= -1;
    }
    if (points[p].y >= height && pointsmoves[p].y > 0) {
      pointsmoves[p].y *= -1;
    }
    //if it collides with another 
    for (let i = 0; i < count; i++) {
      if (points[i].z != points[p].z) {
        if (points[p].x == points[i].x && points[p].y == points[i].y) {
          //if they collide
          let tempx = pointsmove[p].x;
          let tempy = pointsmove[p].y;
          pointsmove[p].x = points[i].x;
          pointsmove[p].y = points[i].y;
          points[i].x = tempx;
          points[i].y = tempy;
        }
      }
    }
    //moving the points
    points[p].x += pointsmoves[p].x * pointsmoves[p].z;
    points[p].y += pointsmoves[p].y * pointsmoves[p].z;
  }
}

function circles() {
  //drawing the circles
  fill(0, 0);
  let checker = 1;
  for (let p = 0; p < count; p++) {
    //setting up random values
    let rad = pointrad[p];
    //drawing tip and setting stroke
    strokeWeight(rad);
    stroke(255);
    point(points[p].x, points[p].y);
    //drawing the circles with the colors
    if (checker == 1) {
      for (let c of yellowblue) {
        stroke(c);
        circle(points[p].x, points[p].y, rad);
        rad += bluegap;
        checker = 2;
      }
    } else if (checker == 2) {
      for (let c of yellowpink) {
        stroke(c);
        circle(points[p].x, points[p].y, rad);
        rad += pinkgap;
        checker = 3;
      }
    } else if (checker == 3) {
      for (let c of yellowgree) {
        stroke(c);
        circle(points[p].x, points[p].y, rad);
        rad += greengap;
        checker = 1;
      }
    }
  }
}