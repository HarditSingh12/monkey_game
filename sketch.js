var monkey,monkeyrun;
var ground,groundImage;
var stoneImage,stonegroup,bananagroup,bananaimage;
var invisibleground;
var score,lives;
function preload(){
  
  monkeyrun = loadAnimation("Monkey_01.png","Monkey_02.png","Monkey_03.png","Monkey_04.png","Monkey_05.png","Monkey_06.png","Monkey_07.png","Monkey_08.png","Monkey_09.png","Monkey_10.png",);
  
  groundImage = loadAnimation("jungle.jpg");
  stoneImage = loadAnimation("stone.png");
  stonegroup = createGroup();
  bananagroup = createGroup();
  bananaimage = loadAnimation("Banana.png");
}


function setup() {
  createCanvas(600,300);
  
  
  
  ground = createSprite(300,145,40,40);
  ground.addAnimation("grgrg",groundImage);
  ground.scale = 0.70;
  
  monkey = createSprite(230,270,40,40);
  monkey.addAnimation("mmmmm",monkeyrun);
  monkey.scale = 0.11;
  
  ground.velocityX = -5;
monkey.depth  = ground.depth +1;
  
  invisibleground= createSprite(300,280,600,20);
  invisibleground.visible = false;  
score = 0;
  lives = 3;
   

}


function draw(){
 background(255); 
  
  text("score" +score,500,100);
   text("lives"+lives,500,150);
  
  if(ground.x < 0){
    ground.x = ground.width/2;
  }
  
    stones();
    banana2();
  
  if(bananagroup.isTouching(monkey)){
score = score +1; 
    bananagroup.destroyEach();

  }
  
  if(monkey.isTouching(stonegroup)){
ground.velocityX = 0;
    lives = lives -1;
    stonegroup.setLifetime = -1;
    bananagroup.setLifetime = -1;
    stonegroup.setVelocityXEach (0);
    bananagroup.setVelocityXEach (0);
    stonegroup.destroyEach();
    bananagroup.destroyEach();

     }
  
  if(keyDown("space")&& monkey.y >=237){
    monkey.velocityY = -15;
    
        
  }
monkey.velocityY= monkey.velocityY + 0.9
  
  monkey.collide(invisibleground);

  drawSprites();
}

function stones(){
if(frameCount % 80 ===0){
 var stone2 = createSprite(650,240,50,50);
  stone2.addAnimation("jdjddj",stoneImage);
stone2.scale = 0.2
  stone2.velocityX = -5;
  stone2.lifetime = 125;
stonegroup.add(stone2);
   


}

}

function banana2(){
if(frameCount % 80 === 0){
var banana = createSprite(650,150,40,40);
  banana.scale = 0.05
  banana.addAnimation("hdgddhh",bananaimage);
  banana.velocityX = -5;
  banana.depth = ground.depth + 1;
  banana.lifetime = 125;
  bananagroup.add(banana);

}

}