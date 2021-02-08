var monkey , monkey_running;
var banana ,bananaImage, obstacle, obstacleImage;
var foodGroup, obstacleGroup;
var score=0;
var survivalTime=0;
var ground;

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(400,400);
  
  
  
  makemonkey();
  
  foodGroup= new Group();
  obstacleGroup= new Group();
  
  
  
}


function draw() {
  background(255);
  
  
  
  //console.log(monkey.y);
  
  makeground();
  monkeyjump();
  survivalT();
  makeFood();
  makeObstacle();
  
  if(monkey.isTouching(foodGroup)){
    foodGroup.destroyEach();
    
  }
  
  drawSprites();
}

function makemonkey(){
  monkey=createSprite(100,320,20,20);
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.09;
}

function makeground(){
  ground=createSprite(200,350,400,15);
  ground.velocityX=-4;
  ground.x=ground.width/2;
  //console.log(ground.x);
  ground.setLifetime=400/4
}

function monkeyjump(){
  if(keyDown("space")&& monkey.y >= 310){
    monkey.velocityY=-15;
  }
  monkey.velocityY = monkey.velocityY + 0.8;
  monkey.collide(ground);
}

function survivalT(){
  stroke("black");
  textSize(20);
  fill("black");
  survivalTime=Math.ceil(frameCount/frameRate());
  text("survival Time="+survivalTime,100,50);
  
}

function makeFood(){
  if(frameCount%80===0){
    banana=createSprite(450,Math.round(random(120,200)),10,10);
    banana.addImage("bananaI",bananaImage);
    banana.velocityX=-4;
    banana.lifetime =400/4;
    banana.scale=0.1;
    foodGroup.add(banana);
  }
}

function makeObstacle(){
  if(frameCount%300===0){
    obstacle=createSprite(450,320,10,10);
    obstacle.addImage("obstacleI",obstaceImage);
    obstacle.velocityX=-4;
    obstacle.lifetime =400/4;
    obstacle.scale=0.1;
    obstacleGroup.add(obstacle);
  }
    
  
  }

