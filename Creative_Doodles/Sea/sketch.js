function setup() {
    createCanvas(1200, 600);
  }
  
  function draw() {
    background(100);
    left();
    right();
    fish();
    eye();
    wind();
    arch();
  }
  function fish() {
    stroke("#0C1A1E");
    strokeWeight(100);
    fill(0, 0);
    beginShape();
    strokeWeight(50);
    vertex(0, 300);
    quadraticVertex(200, 300, 500, 400);
    vertex(500, 400);
    quadraticVertex(1200, 600, 1000, 300);
    endShape();
    beginShape();
    strokeWeight(25);
    vertex(1015, 300);
    vertex(950, 200);
    vertex(980, 300);
    endShape(CLOSE);
    stroke("#1C282A");
    beginShape();
    strokeWeight(25);
    vertex(0, 290);
    quadraticVertex(200, 285, 500, 385);
    vertex(500, 385);
    quadraticVertex(1200, 585, 1000, 285);
    endShape();
    beginShape();
    strokeWeight(15);
    vertex(1015, 300);
    vertex(980, 250);
    vertex(990, 300);
    endShape(CLOSE);
  }
  function eye() {
    stroke("#E7D16D");
    strokeWeight(5);
    fill("#E7D16D");
    beginShape();
    vertex(975, 260);
    quadraticVertex(1000, 280, 990, 300);
    vertex(990, 300);
    quadraticVertex(960, 280, 975, 260);
    endShape();
    noStroke();
    fill("#FDEDA6");
    ellipse(980, 280, 20, 25);
    fill(0);
    circle(984, 285, 20);
    fill("#FFA879");
    circle(984, 285, 10);
  }
  
  function wind() {
    //glass
    blendMode(MULTIPLY);
    fill("#C7D4D5");
    rect(0, 500, 1200, 100);
    fill("#DBE9EA");
    rect(0, 400, 1200, 100);
    fill("#E4EFF0");
    rect(0, 300, 1200, 100);
    fill("#EDF4F5");
    rect(0, 200, 1200, 100);
    fill("#F6FAFA");
    rect(0, 100, 1200, 100);
    blendMode(BLEND);
    //shine
    blendMode(SCREEN);
    stroke(128, 167, 143, 100);
    strokeWeight(50);
    line(-100, 0, 300, 600);
    strokeWeight(30);
    line(0, 0, 400, 600);
    strokeWeight(50);
    line(900, 0, 1300, 600);
    strokeWeight(25);
    line(-100, 0, 300, 600);
    line(900, 0, 1300, 600);
    strokeWeight(15);
    line(0, 0, 400, 600);
    noStroke();
    blendMode(BLEND);
  }
  
  function arch() {
    fill("#192924");
    rect(400, 0, 400, 600);
    rect(0, 0, 1200, 25);
    rect(0, 575, 1200, 25);
    circle(400, 25, 100);
    circle(800, 25, 100);
    circle(400, 575, 100);
    circle(800, 575, 100);
  
    fill("#20332F");
    rect(410, 0, 380, 600);
    rect(0, 0, 1200, 15);
    rect(0, 585, 1200, 15);
    circle(410, 25, 80);
    circle(790, 25, 80);
    circle(410, 575, 80);
    circle(790, 575, 80);
  
    fill("#263E34");
    rect(425, 0, 350, 600);
    rect(0, 0, 1200, 10);
    rect(0, 590, 1200, 10);
    circle(420, 25, 60);
    circle(780, 25, 60);
    circle(420, 575, 60);
    circle(780, 575, 60);
  
    fill("#32543F");
    rect(450, 0, 300, 600);
    rect(0, 0, 1200, 5);
    rect(0, 595, 1200, 5);
    circle(440, 20, 50);
    circle(760, 20, 50);
    circle(440, 580, 50);
    circle(760, 580, 50);
  
    fill("#3F6A4A");
    rect(460, 0, 280, 600);
    rect(0, 0, 1200, 2.5);
    rect(0, 597.5, 1200, 2.5);
    circle(450, 10, 40);
    circle(750, 10, 40);
    circle(450, 590, 40);
    circle(750, 590, 40);
  
    fill("#4B8054");
    rect(475, 0, 250, 600);
    circle(460, 5, 30);
    circle(740, 5, 30);
    circle(460, 595, 30);
    circle(740, 595, 30);
  
    fill("#5F8B58");
    rect(485, 0, 230, 600);
  
    fill("#69905A");
    rect(500, 0, 200, 600);
  
    fill("#72955B");
    rect(515, 0, 170, 600);
  
    fill("#7C9A5D");
    rect(530, 0, 140, 600);
  
    fill("#869F5E");
    rect(545, 0, 110, 600);
  
    fill("#90A460");
    rect(560, 0, 80, 600);
  
    fill("#99A961");
    rect(575, 0, 50, 600);
  
    fill("#ADB364");
    rect(590, 0, 20, 600);
    //shadows
    blendMode(MULTIPLY);
    fill("#8A9D9E");
    rect(0, 0, 1200, 75);
    fill("#8DA0A1");
    rect(0, 75, 1200, 55);
    fill("#90A3A4");
    rect(0, 130, 1200, 35);
    fill("#95A9AA");
    rect(0, 165, 1200, 15);
    fill("#A0B4B5");
    rect(0, 180, 1200, 10);
    fill("#B5CACC");
    rect(0, 190, 1200, 5);
    fill("#DAE5E6");
    rect(0, 195, 1200, 55);
    fill("#EDF2F3");
    rect(0, 250, 1200, 75);
    fill("#F6F9F9");
    rect(0, 325, 1200, 150);
  
    blendMode(BLEND);
  }
  function left() {
    noStroke();
    fill("#90CBCA");
    rect(0, 0, 800, 50);
  
    fill("#83B9BA");
    circle(50, 50, 100);
    circle(150, 50, 100);
    circle(250, 50, 100);
    circle(350, 50, 100);
  
    fill("#68969A");
    circle(0, 100, 100);
    circle(100, 100, 100);
    circle(200, 100, 100);
    circle(300, 100, 100);
    circle(400, 100, 100);
  
    fill("#5B858B");
    circle(50, 150, 100);
    circle(150, 150, 100);
    circle(250, 150, 100);
    circle(350, 150, 100);
  
    fill("#4E737B");
    circle(0, 200, 100);
    circle(100, 200, 100);
    circle(200, 200, 100);
    circle(300, 200, 100);
    circle(400, 200, 100);
  
    fill("#41616B");
    circle(50, 250, 100);
    circle(150, 250, 100);
    circle(250, 250, 100);
    circle(350, 250, 100);
  
    fill("#334F5B");
    circle(0, 300, 100);
    circle(100, 300, 100);
    circle(200, 300, 100);
    circle(300, 300, 100);
    circle(400, 300, 100);
  
    fill("#283D4A");
    circle(50, 350, 100);
    circle(150, 350, 100);
    circle(250, 350, 100);
    circle(350, 350, 100);
  
    fill("#1D2B38");
    circle(0, 400, 100);
    circle(100, 400, 100);
    circle(200, 400, 100);
    circle(300, 400, 100);
    circle(400, 400, 100);
  
    fill("#18222F");
    circle(50, 450, 100);
    circle(150, 450, 100);
    circle(250, 450, 100);
    circle(350, 450, 100);
  
    fill("#121926");
    circle(0, 500, 100);
    circle(100, 500, 100);
    circle(200, 500, 100);
    circle(300, 500, 100);
    circle(400, 500, 100);
  
    fill("#0C101D");
    circle(50, 550, 100);
    circle(150, 550, 100);
    circle(250, 550, 100);
    circle(350, 550, 100);
  
    fill("#060614");
    circle(0, 600, 100);
    circle(100, 600, 100);
    circle(200, 600, 100);
    circle(300, 600, 100);
    circle(400, 600, 100);
  }
  function right() {
    noStroke();
    fill("#90CBCA");
    rect(800, 0, 800, 50);
  
    fill("#83B9BA");
    circle(850, 50, 100);
    circle(950, 50, 100);
    circle(1050, 50, 100);
    circle(1150, 50, 100);
  
    fill("#68969A");
    circle(800, 100, 100);
    circle(900, 100, 100);
    circle(1000, 100, 100);
    circle(1100, 100, 100);
    circle(1200, 100, 100);
  
    fill("#5B858B");
    circle(850, 150, 100);
    circle(950, 150, 100);
    circle(1050, 150, 100);
    circle(1150, 150, 100);
  
    fill("#4E737B");
    circle(800, 200, 100);
    circle(900, 200, 100);
    circle(1000, 200, 100);
    circle(1100, 200, 100);
    circle(1200, 200, 100);
  
    fill("#41616B");
    circle(850, 250, 100);
    circle(950, 250, 100);
    circle(1050, 250, 100);
    circle(1150, 250, 100);
  
    fill("#334F5B");
    circle(800, 300, 100);
    circle(900, 300, 100);
    circle(1000, 300, 100);
    circle(1100, 300, 100);
    circle(1200, 300, 100);
  
    fill("#283D4A");
    circle(850, 350, 100);
    circle(950, 350, 100);
    circle(1050, 350, 100);
    circle(1150, 350, 100);
  
    fill("#1D2B38");
    circle(800, 400, 100);
    circle(900, 400, 100);
    circle(1000, 400, 100);
    circle(1100, 400, 100);
    circle(1200, 400, 100);
  
    fill("#18222F");
    circle(850, 450, 100);
    circle(950, 450, 100);
    circle(1050, 450, 100);
    circle(1150, 450, 100);
  
    fill("#121926");
    circle(800, 500, 100);
    circle(900, 500, 100);
    circle(1000, 500, 100);
    circle(1100, 500, 100);
    circle(1200, 500, 100);
  
    fill("#0C101D");
    circle(850, 550, 100);
    circle(950, 550, 100);
    circle(1050, 550, 100);
    circle(1150, 550, 100);
  
    fill("#060614");
    circle(800, 600, 100);
    circle(900, 600, 100);
    circle(1000, 600, 100);
    circle(1100, 600, 100);
    circle(1200, 600, 100);
  }
  