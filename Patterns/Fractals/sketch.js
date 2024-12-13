let benangle;
let goldenRatio = (1 + Math.sqrt(5)) / 2;
let roangle;
let xoffset = 200;
let yoffset = 200;

function setup() {
  createCanvas(400, 400);
  background("#2E3B2F");
  //bend angle of the tree
  benangle = PI / 3;
  //angle gap between the rotations
  roangle = PI / (3.5);
}

function draw() {
  cells();
  //drawing the trees
  stroke("#E1A526");
  strokeWeight(5);
  extraoffset = 0;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      push();
      translate(x * xoffset + extraoffset, y * yoffset);
      roate();
      pop();
    }
    if (extraoffset == 0) {
      extraoffset = 100;
    } else if (extraoffset == 100) {
      extraoffset = 0;
    }
  }
}
function roate() {
  //rotating the tree around
  let num = (2 * PI) / roangle;
  for (let i = 0; i < num; i++) {
    push();
    rotate(i * roangle);
    tree(35);
    pop();
  }
}

function cells() {
  noStroke();
  //cell circle
  let extraoffset = 0;
  for (let y = 0; y < 3; y++) {
    for (let x = 0; x < 3; x++) {
      fill("#3A4A36");
      circle(x * xoffset + extraoffset, y * yoffset, 200);
      fill("#46593D");
      circle(x * xoffset + extraoffset, y * yoffset, 175);
      fill("#4C6141");
      circle(x * xoffset + extraoffset, y * yoffset, 150);
      fill("#5D764A");
      circle(x * xoffset + extraoffset, y * yoffset, 125);
      fill("#698551");
      circle(x * xoffset + extraoffset, y * yoffset, 100);
      fill("#749357");
      circle(x * xoffset + extraoffset, y * yoffset, 75);
      fill("#80A25E");
      circle(x * xoffset + extraoffset, y * yoffset, 50);
      fill("#8BB064");
      circle(x * xoffset + extraoffset, y * yoffset, 25);
    }
    //modifting the relative offset
    if (extraoffset == 0) {
      extraoffset = 100;
    } else if (extraoffset == 100) {
      extraoffset = 0;
    }
  }
  //drawing  the extra dots
  let extraextraoffset = 100;
  let extrayoffset = 75;
  for (let k = 0; k < 2; k++) {
    fill("#96B772");
    circle(k * xoffset + extraextraoffset, extrayoffset, 40);
    extrayoffset = 325;
    circle(k * xoffset + extraextraoffset, extrayoffset, 40);
    extrayoffset = 75;
    fill("#ABCB88");
    circle(k * xoffset + extraextraoffset, extrayoffset, 30);
    extrayoffset = 325;
    circle(k * xoffset + extraextraoffset, extrayoffset, 30);
    extrayoffset = 75;
    fill("#C0DF9E");
    circle(k * xoffset + extraextraoffset, extrayoffset, 20);
    extrayoffset = 325;
    circle(k * xoffset + extraextraoffset, extrayoffset, 20);
    extrayoffset = 75;
    fill("#D4EEB6");
    circle(k * xoffset + extraextraoffset, extrayoffset, 10);
    extrayoffset = 325;
    circle(k * xoffset + extraextraoffset, extrayoffset, 10);
    extrayoffset = 75;
  }
  extraextraoffset = 0;
  extrayoffset = 125;
  for (let k = 0; k < 3; k++) {
    fill("#96B772");
    circle(k * xoffset + extraextraoffset, extrayoffset, 30);
    extrayoffset = 275;
    circle(k * xoffset + extraextraoffset, extrayoffset, 30);
    extrayoffset = 125;
    fill("#ABCB88");
    circle(k * xoffset + extraextraoffset, extrayoffset, 20);
    extrayoffset = 275;
    circle(k * xoffset + extraextraoffset, extrayoffset, 20);
    extrayoffset = 125;
    fill("#C0DF9E");
    circle(k * xoffset + extraextraoffset, extrayoffset, 10);
    extrayoffset = 275;
    circle(k * xoffset + extraextraoffset, extrayoffset, 10);
    extrayoffset = 125;
    fill("#D4EEB6");
    circle(k * xoffset + extraextraoffset, extrayoffset, 5);
    extrayoffset = 275;
    circle(k * xoffset + extraextraoffset, extrayoffset, 5);
    extrayoffset = 125;
  }
}

//based off of online guides and example codes
function tree(len) {
  line(0, 0, 0, -len);
  //translate the line after being make up by len
  translate(0, -len);
  //the amount it shortens after each iteration
  len *= 0.9;
  if (len > 10) {
    //using push to isolate rotations
    push();
    //rotate it by the angle off of the parent branch
    rotate(benangle);
    tree(len / goldenRatio);
    rotate(-benangle);
    tree(len / goldenRatio);
    rotate(-benangle);
    tree(len / goldenRatio);
    pop();
  }
}