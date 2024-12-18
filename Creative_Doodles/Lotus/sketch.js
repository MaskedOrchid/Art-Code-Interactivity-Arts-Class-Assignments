function setup() {
  createCanvas(500, 500);
}

function draw() {
  background(100, 200, 200);
  noStroke();
  //pond
  fill(75, 175, 175);
  circle(250, 250, 490);
  fill(50, 150, 150);
  circle(250, 250, 450);
  fill(255);
  circle(50, 50, 60);
  circle(80, 30, 50);
  circle(110, 30, 30);

  circle(460, 410, 75);
  circle(440, 460, 55);
  circle(395, 480, 35);
  //shadow
  //leaves
  fill(25, 125, 125);
  rect(260, 50, 240, 240, 500, 10, 500, 10);
  rect(260, 60, 200, 200, 500, 10, 500, 10);
  rect(260, 60, -200, 200, 500, 10, 500, 10);
  rect(260, 460, -200, -200, 500, 10, 500, 10);
  rect(260, 460, 200, -200, 500, 10, 500, 10);
  triangle(150, 400, 252, 470, 350, 400);

  fill(255, 248, 240);
  rect(250, 100, 150, 150, 500, 10, 500, 10);
  rect(250, 100, -150, 150, 500, 10, 500, 10);
  rect(250, 400, -150, -150, 500, 10, 500, 10);
  rect(250, 400, 150, -150, 500, 10, 500, 10);

  //leaves
  fill(170, 170, 10);
  rect(250, 40, 240, 240, 500, 10, 500, 10);

  //flowers
  fill(235, 228, 220);
  rect(250, 50, 200, 200, 500, 10, 500, 10);
  rect(250, 50, -200, 200, 500, 10, 500, 10);
  rect(250, 450, -200, -200, 500, 10, 500, 10);
  rect(250, 450, 200, -200, 500, 10, 500, 10);
  
  //shadow
  fill(218, 210, 199);
  rect(250, 90, 170, 170, 500, 10, 500, 10);
  rect(265, 90, -170, 170, 500, 10, 500, 10);
  rect(265, 420, -170, -170, 500, 10, 500, 10);
  rect(250, 420, 170, -170, 500, 10, 500, 10);
  
  //layers
  stroke(235, 228, 220);
  fill(245, 238, 230);
  rect(250, 100, 150, 150, 500, 10, 500, 10);
  rect(250, 100, -150, 150, 500, 10, 500, 10);
  rect(250, 400, -150, -150, 500, 10, 500, 10);
  rect(250, 400, 150, -150, 500, 10, 500, 10);

  rotate(QUARTER_PI);
  //shadow
  fill(218, 210, 199);
  noStroke()
  rect(210, 0, 170, 150, 500, 10, 500, 10);
  rect(205, 0, 170, -150, 500, 10, 500, 10);
  rect(360, 150, 150, -170, 500, 10, 500, 10);
  rect(355, -145, 150, 170, 500, 10, 500, 10);
  //upper petals
  stroke(218, 210, 199);
  fill(245, 238, 230);
  rect(210, 0, 150, 150, 500, 10, 500, 10);
  rect(205, 0, 150, -150, 500, 10, 500, 10);
  rect(355, 150, 150, -150, 500, 10, 500, 10);
  rect(350, -145, 150, 150, 500, 10, 500, 10);
  rotate(0);

  //center
  noStroke();
  fill(200, 160, 80);
  circle(350, 0, 200);
  fill(220, 180, 100);
  circle(350, 0, 150);
  fill(240, 200, 120);
  circle(350, 0, 125);
  fill(260, 220, 140);
  circle(350, 0, 100);
  fill(280, 240, 160);
  circle(350, 0, 75);
  fill(300, 260, 180);
  circle(350, 0, 50);
}