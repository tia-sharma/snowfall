const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var bg;
var girl, girlG;
var snow = [];
var engine,world;

function preload() { 
  bg = loadImage("snow1.jpg");
  girl = loadImage("girl.png");
}
function setup() { 
  createCanvas(800,400);
  engine=Engine.create();
  world= engine.world;
  girlG = createSprite(400, 200, 50, 50);
  girlG.addImage(girl);
  girlG.scale=0.5;
}

function draw() { 
  Engine.update(engine)
  background(bg);  

  if(frameCount%10===0){
    snow.push(new Snow(random(0,800), 10,30,30));
  }
   
//display the paricles 
for (var j = 0; j<snow.length; j++) {
  snow[j].display();
}
  drawSprites();
}

function keyPressed() {
  if(keyCode === 32 ){
    girlG.velocityX = girlG.velocityX+2;
  }
}