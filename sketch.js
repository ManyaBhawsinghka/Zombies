var Z1;
var Z1Img;
var bgImg;
var P1 , P1Img ;
var P2 , P2Img ;
var button;
var rod;
var score = 0;

function preload(){
  Z1Img = loadImage("Z1.png");
  bgImg = loadImage("Bg.png");
  P1Img = loadImage("P1.png");
  P2Img = loadImage("P2.png");
}

function setup() {
  createCanvas(1400,800);

  Z1=createSprite(1300,600,50,50);
  Z1.addImage(Z1Img);
  Z1.scale = 0.6;
  //Z1.velocityY = -2;
  Z1.velocityX = -1;

  P1 = createSprite(100,600,50,50);
  P1.addImage(P1Img);
  P1.scale = 0.5;
  P1.velocityX = 2;

  P2 = createSprite(150,750,50,50);
  P2.addImage(P2Img);
  P2.scale = 0.5;
  P2.velocityX = 2;

  button = createSprite(1350,650,30,30);
  button.shapeColor = "red";

  rod = createSprite(1350,650,200,5);
  rod.shapeColor = "blue";
}

function draw() {
  background(bgImg);
  
  if(Z1.x === 100){
    Z1.velocityX = 0;
    Z1.velocityY = 0;
  }

  if(P1.x === 1300){
    P1.velocityX = 0;
    P1.velocityY = 0;
  }

  if(P2.x === 1300){
    P2.velocityX = 0;
    P2.velocityY = 0;
  }

  if(Z1.isTouching(P1)){
    P1.destroy();
  }

  if(Z1.isTouching(P2)){
    P2.destroy();
  }

  if(keyDown(UP_ARROW)){
    P2.velocityY = -2;
    P2.velocityX = 2;
  }

  if(P2.isTouching(button)){
    rod.velocityX = -3;
  }

  if(rod.isTouching(Z1) && P2.isTouching(button)){
    Z1.destroy();
    score = score+10;
    
  }

  if(score === 10){
    textSize(40);
    fill("black");
    text("YOU WON", 600, 350);
    text("Score:" +score , 600,300);
  }

  drawSprites();
}