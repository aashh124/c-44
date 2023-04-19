var cypher;
var blind;
var jett;
var reyna;
var sova;
var zombie1;
var zombie2;
var zombie3;
var zombie4;


function preload(){
  zombie1Img=loadImage("images/zombie1.jpg");
  zombie2Img=loadImage("images/zombie2.jpg");
  zombie3Img=loadImage("images/zombie3.jpg");
  zombie4Img=loadImage("images/zombie4.jpg");
  blindImg=loadImage("images/blind.jpg");
  jettImg=loadImage("images/jett.jpg");
  cypherImg=loadImage("images/cypher.jpg");
  reynaImg=loadImage("images/reyna.jpg");
  sovaImg=loadImage("images/sova.jpg");
}







function setup(){
  createCanvas(windowWidth,windowHeight);

  

  blind = createSprite(displayWidth/2-20,displayHeight/2-40,20,20);
  blind.addImage(blindImg);
  //blind.scale=1.1;
  

  zombie1 = createSprite(500,350,20,50);
  zombie1.addAnimation("running", zombie1Img);
  zombie1.scale=0.4;

  zombie2=createSprite(550,400,20,50);
  zombie2.addAnimation("running", zombie2Img);
  zombie2.scale=0.4;

  zombie3=createSprite(899,456,20,50);
  zombie3.addAnimation("running",zombie3Img);
  zombie3.scale=0.4;


  zombie4=createSprite(778,459,20,50);
  zombie4.addAnimation("running",zombie4Img);
  zombie4.scale=0.4;

  cypher=createSprite(500,347,20,50);
  cypher.addAnimation("running",cypherImg);
  cypher.scale=0.4;

  jett=createSprite(440,330,20,50);
  jett.addAnimation("running",jettImg);
  jett.scale=0.4;

  reyna=createSprite(310,335,20,50);
  reyna.addAnimation("running",reynaImg);
  reyna.scale=0.4;

  sova=createSprite(333,324,20,50);
  sova.addAnimation("running",sovaImg);
  sova.scale=0.4;
}

  function draw() {
    background(255,255,255);  
    drawSprites();
   cypher.addImage("cypher.jpg");
   blind.addImage("blind.jpg");
   jett.addImage("jett.jpg");
   reyna.addImage("reyna.jpg");
   sova.addImage("sova.jpg");
   zombie1.addImage(zombie1.jpg);
   zombie2.addImage(zombie2.jpg);
   zombie3.addImage(zombie3.jpg);
   zombie4.addImage(zombie4.jpg);
  }


