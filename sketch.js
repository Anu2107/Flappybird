const Engine = Matter.Engine; 
const Bodies = Matter.Bodies; 
const World = Matter.World; 

var bg, bgSprite;  
var engine, world; 
var bird; 
var pipe1=[];
var pipe2=[];
var score = 0;
var gameState = "PLAY"; 

function preload(){
  bg = loadImage("background.jpg"); 
}
function setup() {
  createCanvas(displayWidth, displayHeight);
  engine = Engine.create(); 
  world = engine.world; 

  bgSprite = createSprite(displayWidth/2, displayHeight/2, displayWidth, displayHeight); 
  bgSprite.velocityX = -2; 
  bgSprite.addImage(bg); 

  bird = new flappy(100, 120); 

}

function draw() {
  background(0); 
  Engine.update(engine); 

  if(gameState==="PLAY"){
  if(bgSprite.x < displayWidth/2-100){
     bgSprite.x = bgSprite.width/2; 
  }

  score=score+Math.round(frameCount/100); 
   drawSprites();
   textSize(20); 
   fill("black"); 
   text("Score:" + score, 900,20); 
      if(frameCount%60===0)
   {
      pipe1.push(new tPipe(600,random(40,80)))
    
      
   }
   for(i=0;i<pipe1.length;i++)
   {
     pipe1[i].display();
     var t = { x: -2, y: 0 }
     Matter.Body.translate(pipe1[i].body, t);
     if(Matter.SAT.collides(bird.body, pipe1[i].body).collided)
     {
       Matter.Body.setStatic(bird.body,false)
       Matter.Body.applyForce(bird.body,bird.body.position,{x:-45,y:25})
       gameState = "END"; 
      }
   }
   if(frameCount%60===0)
   {
      pipe2.push(new bPipe(600,random(200,220)))
    
      
   }
   for(i=0;i<pipe2.length;i++)
   {
     pipe2[i].display();
     var t = { x: -2, y: 0 };
     Matter.Body.translate(pipe2[i].body, t);
   }
  
  bird.display(); 
  } 

  if(gameState==="END"){
    textSize(40); 
    fill("white"); 
    text(score, displayWidth/2-100, displayHeight/2); 
    textSize(50)
    fill("white");
    text("GAME OVER", displayWidth/2-200, displayHeight/2-200); 
  }
}

function keyPressed()
{
  if(keyCode===RIGHT_ARROW)
  {
    bird.body.position.x=bird.body.position.x+5;
  }
  
  if(keyCode===UP_ARROW)
  {
    bird.body.position.y=bird.body.position.y-5;
  }
  if(keyCode===DOWN_ARROW)
  {
    bird.body.position.y=bird.body.position.y+5;
  }
}
