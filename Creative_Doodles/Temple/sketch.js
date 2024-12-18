function setup() {
    createCanvas(800, 400);
  }
  
  function draw() {
    background(0);
    sky();
    stars();
    clouds();
    sun();
    castle();
    middle();
    forground()
  }
  function clouds(){
    fill(255,150)
    strokeWeight(.5)
    bezier(-100,100,0,250,300,250,0,250)
    bezier(0,250,300,100,500,250,600,250)
    bezier(250,250,400,100,500,100,800,250)
    bezier(400,250,800,100,800,100,9000,250)
  }
  function stars(){
    stroke(255)
    strokeWeight(10)
    point(50,50)
    point(60, 100)
    point(790,50)
    point(340,30)
    point(240,120)
    point(500,8)
    point(760,20)
    point(580,30)
    strokeWeight(5)
    point(60,43)
    point(230,20)
    point(654,50)
    point(450,30)
    point(429,100)
    point(135,120)
    point(347,80)
    point(260,60)
    point(680,30)
    strokeWeight(2)
    point(100,78)
    point(140,50)
    point(467,60)
    point(200,80)
    point(10,10)
    point(165,190)
    point(35,30)
    point(780,40)
    point(680,30)
    
    
  }
  function forground(){
    fill(112,165,151)
    bezier(0,400,150,200,500,400,500,400)
    bezier(-30,400,-130,100,10,400,500,400)
    bezier(200,400,200,200,1000,200,800,400)
    bezier(300,400,700,100,1000,200,800,400)
    fill(85,127,116)
    bezier(0,430,150,230,500,430,500,430)
    bezier(-30,430,-130,100,10,400,500,400)
    bezier(200,420,200,220,1000,220,800,420)
    bezier(300,430,700,130,1000,230,800,440)
    fill(65,104,94)
    bezier(0,480,150,230,500,430,500,430)
    bezier(-30,480,-130,100,10,400,500,400)
    bezier(200,490,200,220,1000,250,800,420)
    bezier(300,490,700,180,1000,290,800,440)
  }
  function sun(){
    stroke(255,255,218)
    strokeWeight(1.5)
    fill(255,235,132,50)
    circle(150,250,200)
    fill(255,235,132,50)
    circle(150,250,175)
    fill(255,235,132,50)
    circle(150,250,150)
    fill(255,235,132,50)
    circle(150,250,125)
    //sun
    fill(255,235,132)
    circle(150,250,100)
    //
    fill(255,240,163)
    circle(150,250,75)
    //
    fill(255,245,194)
    circle(150,250,50)
    //
    fill(255,250,225)
    circle(150,250,25)
  }
  function castle(){
    noStroke();
    //forest
    fill(167,205,172)
    bezier(500,100,500,100,800,0,800,100)
    fill(134,183,160)
    bezier(500,100,625,100,800,0,800,100)
    //temple
    fill(98,95,92)
    rect(600,50,125,75,300,300,0,0)
    fill(65,64,78)
    rect(620,55,125,75,300,300,0,0)
    fill(74,71,68)
    rect(700,20,50,100,300,300,0,0)
    rect(575,20,50,100,300,300,0,0)
    fill(50,47,62)
    rect(710,20,40,100,300,300,0,0)
    rect(585,20,40,100,300,300,0,0)
    //back
    fill(184,187,218)
    quad(600,350,500,100,800,100,800,800)
    //shadows
    fill(153,156,203)
    quad(600,350,605,150,640,200,700,500)
    quad(700,350,700,150,800,200,800,500)
    fill(49,78,125,155)
    quad(615,350,615,165,640,200,700,500)
    quad(600,140,500,100,800,110,800,310)
    //highlights
    fill(226,221,246)
    quad(600,350,500,100,600,150,600,500)
    quad(650,350,625,175,700,250,700,500)
    fill(247,236,255)
    quad(600,350,500,100,560,150,675,500)
    quad(650,350,625,175,675,250,600,500)
    fill(255,255,245)
    quad(600,350,500,100,540,150,675,500)
    quad(650,350,625,175,650,250,600,500)
    //grass
    fill(85,127,116)
    quad(600,125,500,100,800,100,800,300)
    fill(112,165,151)
    quad(625,115,500,100,800,100,750,200)
    bezier(500,100,625,100,800,30,850,120)
   
  }
  function sky(){
    noStroke();
    //#080920
    fill(8,9,32)
    rect(0,0,800,25)
    //0B0C27
    fill(11,12,39)
    rect(0,25,800,25)
    //0E0F2D
    fill(14,15,45)
    rect(0,50,800,25)
    //111233
    fill(17,18,51)
    rect(0,75,800,25)
    //131439
    fill(19,20,57)
    rect(0,100,800,25)
    
    //231940
    fill(35,25,64)
    rect(0,125,800,25)
    //331D46
    fill(51,29,70)
    rect(0,150,800,25)
    //522552
    fill(82,37,82)
    rect(0,175,800,25)
    
    //91366B
    fill(145,54,107)
    rect(0,200,800,15)
    //C87585
    fill(200,117,133)
    rect(0,215,800,15)
    //FFB49E
    fill(255,180,158)
    rect(0,230,800,15)
    //FFD4A2
    fill(255,212,162)
    rect(0,245,800,5)
  }
  function middle(){
     noStroke();
    fill(64,123,131)
    rect(0,250, 800)
    fill(13,24,32)
    rect(0,390, 800,10)
    fill(19,34,42)
    rect(0,380, 800,10)
    fill(25,44,52)
    rect(0,360, 800,20)
    fill(36,64,71)
    rect(0,330, 800,30)
    fill(58,103,110)
    rect(0,290, 800,40)
    
    //water shine
    fill(130,170,175)
    rect(5,250, 100,10,20,20,20,20)
    rect(80,255, 100,10,20,20,20,20)
    rect(500,250, 250,10,20,20,20,20)
    rect(450,255, 250,10,20,20,20,20)
    rect(200,250, 100,10,20,20,20,20)
    rect(320,255, 100,10,20,20,20,20)
    rect(350,250, 115,10,20,20,20,20)
    rect(150,260, 115,10,20,20,20,20)
    rect(0,270, 115,10,20,20,20,20)
    rect(400,270, 300,10,20,20,20,20)
    rect(175,270, 75,10,20,20,20,20)
    rect(350,275, 75,10,20,20,20,20)
    rect(275,270, 100,10,20,20,20,20)
    rect(125,280, 200,10,20,20,20,20)
    rect(275,295, 100,10,20,20,20,20)
    rect(20,295, 100,10,20,20,20,20)
    rect(170,300, 125,10,20,20,20,20)
    rect(470,290, 75,10,20,20,20,20)
    rect(360,290, 75,10,20,20,20,20)
    rect(-10,310, 100,10,20,20,20,20)
    rect(450,300, 125,10,20,20,20,20)
    rect(250,320, 125,10,20,20,20,20)
    rect(80,320, 75,10,20,20,20,20)
    rect(150,350, 75,10,20,20,20,20)
    rect(450,325, 150,10,20,20,20,20)
    rect(350,350, 150,10,20,20,20,20)
    rect(260,320, 125,10,20,20,20,20)
    rect(-20,275, 100,10,20,20,20,20)
    rect(-20,280, 75,10,20,20,20,20)
    rect(450,400, 150,10,20,20,20,20)
    rect(400,310, 150,10,20,20,20,20)
    rect(0,250, 800,10,20,20,20,20)
    fill(195,218,222)
    rect(5,250, 100,5,20,20,20,20)
    rect(80,255, 100,5,20,20,20,20)
    rect(500,250, 250,5,20,20,20,20)
    rect(450,255, 250,5,20,20,20,20)
    rect(200,250, 100,5,20,20,20,20)
    rect(320,255, 100,5,20,20,20,20)
    rect(350,250, 115,5,20,20,20,20)
    rect(150,260, 115,5,20,20,20,20)
    rect(10,250, 200,5,20,20,20,20)
    rect(0,270, 115,5,20,20,20,20)
    rect(400,270, 300,5,20,20,20,20)
    rect(175,270, 75,5,20,20,20,20)
    rect(350,275, 75,5,20,20,20,20)
    rect(275,270, 100,5,20,20,20,20)
    rect(125,280, 200,5,20,20,20,20)
    rect(275,295, 100,5,20,20,20,20)
    rect(20,295, 100,5,20,20,20,20)
    rect(170,300, 125,5,20,20,20,20)
    rect(470,290, 75,5,20,20,20,20)
    
  }