function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(100);
  back();
  creature();
  borders();
}
function borders() {
  stroke(255,253,230)
  fill(220, 212, 170);
  rect(0, -10, 50, 650);
  rect(350, -10, 50, 650);
  fill(255, 248, 212);
  rect(10, -10, 30, 650);
  rect(360, -10, 30, 650);
}
function creature() {
  stroke(255,232,111,25)
  strokeWeight(70)
  bezier(250,150,400,250,50,400,200,600)
  bezier(200,600,500,550,200,450,275,400)
  fill(255,232,111,25)
  noStroke()
  circle(245,145,200)
  circle(275,400,150)
  circle(125,600,275)

  
  
  stroke(255,239,152,25)
  strokeWeight(50)
  bezier(250,150,400,250,50,400,200,600)
  bezier(200,600,500,550,200,450,275,400)
  fill(255,239,152,25)
  noStroke()
  circle(245,145,150)
  circle(275,400,125)
  circle(125,600,250)
  
  
  stroke(255,239,152,50)
  strokeWeight(25)
  bezier(250,150,400,250,50,400,200,600)
  bezier(200,600,500,550,200,450,275,400)
  fill(255,239,152,50)
  noStroke()
  circle(245,145,100)
  circle(275,400,75)
  circle(125,600,225)
  
  
  
  stroke(255,250,208,100)
  strokeWeight(10)
  bezier(250,150,400,250,50,400,200,600)
  bezier(200,600,500,550,200,450,275,400)
  fill(255,250,208,100)
  noStroke()
  circle(245,145,75)
  circle(275,400,50)
  circle(125,600,200)
  
  
  stroke(255)
  strokeWeight(5)
  bezier(250,150,400,250,50,400,200,600)
  bezier(200,600,500,550,200,450,275,400)
  
  //head
  fill(255)
  circle(245,145,50)
  circle(275,400,25)
  circle(125,600,175)
  
  //beak
  triangle(224,157,260,125,210,111)
  triangle(264,395,300,350,295,405)
  triangle(50,550,150,500,200,560)
  //eye
  noStroke()
  fill(126,184,228)
  circle(245,145,40)
  circle(275,400,25)
  circle(125,600,125)
  
  fill(133,202,232)
  circle(241,149,30)
  circle(275,399,20)
  circle(125,580,85)
  
  fill(28,42,48)
  circle(243,143,20)
  circle(273,400,10)
  circle(125,600,85)
  
  fill(28,42,48)
  circle(252,152,10)
  circle(278,400,5)
  
  fill(255)
  circle(243,133,10)
  circle(270,395,5)
  circle(100,570,30)
  
}
  
function back() {
  noStroke();
  //90CBCA
  fill(144, 203, 202);
  rect(0, 0, 800, 50);

  //83B9BA
  fill(131, 185, 186);
  circle(50, 50, 100);
  circle(150, 50, 100);
  circle(250, 50, 100);
  circle(350, 50, 100);

  //68969A
  fill(104, 150, 154);
  circle(0, 100, 100);
  circle(100, 100, 100);
  circle(200, 100, 100);
  circle(300, 100, 100);
  circle(400, 100, 100);

  //5B858B
  fill(91, 133, 139);
  circle(50, 150, 100);
  circle(150, 150, 100);
  circle(250, 150, 100);
  circle(350, 150, 100);

  //4E737B
  fill(78, 115, 123);
  circle(0, 200, 100);
  circle(100, 200, 100);
  circle(200, 200, 100);
  circle(300, 200, 100);
  circle(400, 200, 100);

  //41616B
  fill(65, 97, 107);
  circle(50, 250, 100);
  circle(150, 250, 100);
  circle(250, 250, 100);
  circle(350, 250, 100);

  //334F5B
  fill(51, 79, 91);
  circle(0, 300, 100);
  circle(100, 300, 100);
  circle(200, 300, 100);
  circle(300, 300, 100);
  circle(400, 300, 100);

  //283D4A
  fill(40, 61, 74);
  circle(50, 350, 100);
  circle(150, 350, 100);
  circle(250, 350, 100);
  circle(350, 350, 100);

  //1D2B38
  fill(29, 43, 56);
  circle(0, 400, 100);
  circle(100, 400, 100);
  circle(200, 400, 100);
  circle(300, 400, 100);
  circle(400, 400, 100);

  //18222F
  fill(24, 34, 47);
  circle(50, 450, 100);
  circle(150, 450, 100);
  circle(250, 450, 100);
  circle(350, 450, 100);

  //121926
  fill(18, 25, 38);
  circle(0, 500, 100);
  circle(100, 500, 100);
  circle(200, 500, 100);
  circle(300, 500, 100);
  circle(400, 500, 100);

  //0C101D
  fill(12, 16, 29);
  circle(50, 550, 100);
  circle(150, 550, 100);
  circle(250, 550, 100);
  circle(350, 550, 100);

  //060614
  fill(6, 6, 20);
  circle(0, 600, 100);
  circle(100, 600, 100);
  circle(200, 600, 100);
  circle(300, 600, 100);
  circle(400, 600, 100);
}
