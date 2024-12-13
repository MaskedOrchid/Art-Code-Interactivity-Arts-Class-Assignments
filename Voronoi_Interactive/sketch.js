let points = [];
let steps = 10;
let count = 0;
let delaunay;
let voronoi;
//buttons:
let addButton;
let adding = true;
let strokeButton;
let strolines = true;
let c1Button;
let c2Button;
let preButton;
let defaultButton;
let stepButton;
let saveButton;
//sliders
let strokeSlider;
let strokebri = 0;
let hueSlider;
let satSlider;
let briSlider;
let stepSlider;
//color
let c1;
let c2;
let huestep;
let satstep;
let bristep;

//information about the math
  //https://en.wikipedia.org/wiki/Voronoi_diagram
  //https://en.wikipedia.org/wiki/Delaunay_triangulation
//Link to the libary I used
  //https://d3js.org/d3-delaunay/voronoi

function setup() {
  createCanvas(windowWidth, windowHeight - 75);
  colorMode(HSL);
  //the voronoi diagram
  delaunay = d3.Delaunay.from(points);
  voronoi = delaunay.voronoi([0, 0, width, height]);
  //too much work to recreate the buttons
  //setting up Add button
  addButton = createButton("Adding");
  addButton.mousePressed(toggleAdd);
  addButton.style(
    "background-color: #9fa1a4;font-size: 15px;text-align: center; padding: .5em;border: 2px solid Black;border-radius: 5px;"
  );
  addButton.position(0, height + 10);
  addButton.size(100,50);
  //setting up stroke stuff
  //stroke button
  strokeButton = createButton("Toggle Line");
  strokeButton.mousePressed(toggleStroke);
  strokeButton.style(
    "background-color: #9fa1a4;font-size: 15px;text-align: center;border: 2px solid Black;border-radius: 5px;"
  );
  strokeButton.position(110, height + 10);
  strokeButton.size(150);
  //stroke darkness value;
  strokeSlider = createSlider(0, 100, 10, 1);
  strokeSlider.position(110, height + 40);
  strokeSlider.size(150);

  //default color button
  defaultButton = createButton("Random Complementary Colors");
  defaultButton.mousePressed(resetColors);
  defaultButton.style(
    "background-color: #9fa1a4;font-size: 15px;text-align: center; padding: .5em;border: 2px solid Black;border-radius: 5px;"
  );
  defaultButton.position(270, height + 10);
  defaultButton.size(200);

  //C1 button
  c1Button = createButton("Set Color");
  c1Button.style(
    "background-color: #9fa1a4;font-size: 15px;text-align: center;border: 2px solid Black;border-radius: 5px;"
  );
  c1Button.position(480, height + 10);
  c1Button.size(150);
  c1Button.mousePressed(setC1);
  //C2 button
  c2Button = createButton("Set Fade Color");
  c2Button.style(
    "background-color: #9fa1a4;font-size: 15px;text-align: center;border: 2px solid Black;border-radius: 5px;"
  );
  c2Button.position(480, height + 40);
  c2Button.size(150);
  c2Button.mousePressed(setC2);
  //color preview
  preButton = createButton("");
  preButton.style(
    "background-color: #9fa1a4;font-size: 5px;text-align: center;border: 2px solid Black;border-radius: 5px;"
  );
  preButton.position(640, height + 10);
  preButton.size(55, 55);

  //sliders
  hueSlider = createSlider(0, 360, 360 / 2, 1);
  hueSlider.position(695, height + 5);
  hueSlider.size(100);

  satSlider = createSlider(0, 100, 50, 1);
  satSlider.position(695, height + 27.5);
  satSlider.size(100);

  briSlider = createSlider(0, 100, 50, 1);
  briSlider.position(695, height + 50);
  briSlider.size(100);

  //step and slider
  stepButton = createButton("Set Step Size");
  stepButton.style(
    "background-color: #9fa1a4;font-size: 15px;text-align: center;border: 2px solid Black;border-radius: 5px;"
  );
  stepButton.position(810, height + 10);
  stepButton.size(150);
  stepButton.mousePressed(setStepValue);
  //stroke darkness value;
  stepSlider = createSlider(1, 50, 10, 1);
  stepSlider.position(810, height + 40);
  stepSlider.size(150);
  //save button
  saveButton = createButton("Save");
  saveButton.style(
    "background-color: #9fa1a4;font-size: 15px;text-align: center;border: 2px solid Black;border-radius: 5px;"
  );
  saveButton.position(970, height + 10);
  saveButton.size(50, 50);
  saveButton.mousePressed(saveVoronoi);
  //setting default colors
  resetColors();
}

function renderCells() {
  //Drawing the cells
  if (points.length == 0) {
    //if there are no points to draw, done just for consistency
    stroke(0);
    background(c1.x, c1.y, c1.z);
    strokeWeight(1);
    line(0, 0, width, 0);
    line(width, 0, width, height);
    line(width, height, 0, height);
    line(0, height, 0, 0);
    return;
  } else {
    
    for (let i = 0; i < points.length; i++) {
      let cell = voronoi.cellPolygon(i);
      if (cell) {
        strokeWeight(1);
        let c = findColor(points[i][0], points[i][1]);
        if (strolines) {
          //if they want line
          stroke(c.x, c.y, strokebri);
        } else {
          stroke(c.x, c.y, c.z);
        }

        fill(c.x, c.y, c.z);
        //using shape to generate the cells getting the information from the generated library
        beginShape();
        for (let j = 0; j < cell.length; j++) {
          vertex(cell[j][0], cell[j][1]);
        }
        endShape(CLOSE);
      }
    }

    // //Draw the points on top for testing
    // fill("white");
    // for (let i = 0; i < points.length; i++) {
    //   ellipse(points[i][0], points[i][1], 5, 5);
    // }
  }
}

function draw() {
  //getting live reaction to the changes to the line slider
  if (strokebri != strokeSlider.value()) {
    strokebri = strokeSlider.value();
    renderCells();
  }
  //getting live reaction to the changes made by hue, sat, and bri slider
  let c = createVector(hueSlider.value(), satSlider.value(), briSlider.value());
  let hexx = HSLtoHEX(c.x, c.y, c.z);
  preButton.style("background-color", hexx);
}

function mouseClicked() {
  //on mouse click add or sub a point
  let x = mouseX;
  let y = mouseY;
  //making sure the clicks are within bounds
  if (x < 0 || x > width) {
    console.log(" X Out of Bounds");
    return;
  }
  if (y < 0 || y > height) {
    console.log("Y Out of Bounds");
    return;
  }
  
  if (adding) {
    count += 1;
    points.push([x, y]);
    //regenerating the voronoi diagram
    delaunay = d3.Delaunay.from(points);
    voronoi = delaunay.voronoi([0, 0, width, height]);
    renderCells();
  } else {
    //if substracting, making sure the cell exists in the diagram
    let i = findIndex(x, y);
    if (i < 0) {
      console.log("Does not exist");
      return;
    }
    //removing the point and regenerating the voronoi diagram
    count -= 1;
    points.splice(i, 1);
    delaunay = d3.Delaunay.from(points);
    voronoi = delaunay.voronoi([0, 0, width, height]);
    console.log(points.length);
    renderCells();
  }
}

function distance(x1, y1, x2, y2) {
  //distance formula 
  return sqrt(pow(x2 - x1, 2) + pow(y2 - y1, 2));
}

function findIndex(x, y) {
  //a function to check if the voronoi diagram has a cell at a particular point
  for (let i = 0; i < points.length; i++) {
    if (voronoi.contains(i, x, y)) {
      //return if the certain voronoi has the cell
      return i;
    }
  }
  return -1;
}

function HSLtoHEX(h, s, l) {
  //This function converts from HSL to Hex by first converting into RBG
  //based of examples from Web3school
  l /= 100;
  const a = (s * Math.min(l, 1 - l)) / 100;
  let r = HSLtoRBG(0, a, h, s, l);
  let g = HSLtoRBG(8, a, h, s, l);
  let b = HSLtoRBG(4, a, h, s, l);
  return "#" + r + g + b;
}

function HSLtoRBG(n, a, h, s, l) {
  //This function converts from HSL to RBG
  //based of examples from Web3school
  const k = (n + h / 30) % 12;
  const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
  return Math.round(255 * color)
    .toString(16)
    .padStart(2, "0");
}

function defaultColors() {
  //this function generates a random color, and then it's complementary color
  let hu = round(random(361));
  c1 = createVector(hu, round(random(5, 101)), round(random(5, 96)));
  let nhu = hu + 180;
  if (nhu > 360) {
    nhu = hu + 180 - 360;
  }
  c2 = createVector(nhu, round(random(5, 101)), round(random(5, 96)));
  setSteps();
}

function setSteps() {
  //this function finds the hue, saturation, and brightness values in order to transdition from c1 to c2 in steps steps
  let dh = c2.x - c1.x;
  let ds = c2.y - c1.y;
  let db = c2.z - c1.z;

  huestep = dh / steps;
  satstep = ds / steps;
  bristep = db / steps;
  //tracking the code's work
  console.log("Colors:");
  console.log("c1:", c1.x, ",", c1.y, ",", c1.z);
  console.log("c2:", c2.x, ",", c2.y, ",", c2.z);
  console.log("Steps");
  console.log("Hue:", huestep);
  console.log("Sat:", satstep);
  console.log("Bri:", bristep);
}

function findColor(x, y) {
  //this function find the transditional color based on the point's distance from the center
  let dn = distance(x, y, width / 2, height / 2);
  let k = 0;
  let d = width;
  if (width > height) {
    d = height;
  }
  let gap = d / steps;

  for (k = 0; k < steps; k++) {
    if (dn > gap * k && dn <= gap * (k + 1)) {
      break;
    }
  }
  // console.log("k:",k)
  if (dn > gap * steps) {
    return c2;
  }
  let nhu = c1.x + k * huestep;

  let nsat = c1.y + k * satstep;

  let nbri = c1.z + k * bristep;

  let c = createVector(nhu, nsat, nbri);

  // console.log("Cell Color")
  // console.log("c:",c.x,",",c.y,",",c.z)
  return c;
}

function toggleAdd() {
  //function to toggle add, and change it's button's color
  if (adding) {
    adding = false;
    addButton.style("background-color: #E88870;");
    console.log("deleting");
  } else {
    adding = true;
    console.log("adding");
    addButton.style("background-color: #9fa1a4;");
  }
}

function toggleStroke() {
  //function to toggle lines in the diagram, and change the line  toggle button 
  if (strolines) {
    strolines = false;
    strokeButton.style("background-color: #E88870;");
    console.log("Lineless");
    renderCells();
  } else {
    strolines = true;
    console.log("lines");
    strokeButton.style("background-color: #9fa1a4;");
    renderCells();
  }
}

function setC1() {
  //setting c1 color to the color slider's value, and senting the button
  if (c1.x != hueSlider.value()) {
    c1.x = hueSlider.value();
  }
  if (c1.y != satSlider.value()) {
    c1.y = satSlider.value();
  }
  if (c1.z != briSlider.value()) {
    c1.z = briSlider.value();
  }
  let hexx = HSLtoHEX(c1.x, c1.y, c1.z);
  c1Button.style("background-color", hexx);
  setSteps();
  renderCells();
}

function setC2() {
  //setting c2 color to the color slider's value, and senting the button
  if (c2.x != hueSlider.value()) {
    c2.x = hueSlider.value();
  }
  if (c2.y != satSlider.value()) {
    c2.y = satSlider.value();
  }
  if (c2.z != briSlider.value()) {
    c2.z = briSlider.value();
  }
  let hexx = HSLtoHEX(c2.x, c2.y, c2.z);
  c2Button.style("background-color", hexx);
  setSteps();
  renderCells();
}

function setButtonColor() {
  //setting the color buttons to c1 and c2
  let hexx = HSLtoHEX(c1.x, c1.y, c1.z);
  c1Button.style("background-color", hexx);
  hexx = HSLtoHEX(c2.x, c2.y, c2.z);
  c2Button.style("background-color", hexx);
}

function setStepValue() {
  //setting steps to the step value, and regenerating the diagram
  steps = stepSlider.value();
  setSteps();
  renderCells();
}

function saveVoronoi() {
  //the function to save the voronoi diagram with the colors used to name the file
  let hexx1 = HSLtoHEX(c1.x, c1.y, c1.z);
  let hexx2 = HSLtoHEX(c2.x, c2.y, c2.z);
  let name = "Voronoi(" + hexx1 + hexx2 + ")";
  console.log(name);
  saveCanvas(name, "png");
}

function resetColors() {
  //reseting the colors to the base random color behavior. 
  defaultColors();
  setButtonColor();
  renderCells();
}
