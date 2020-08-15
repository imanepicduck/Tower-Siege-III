const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, sq;
var platform1;
var slingshot;

function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);
  engine = Engine.create();
    world = engine.world;

 platform1 = new Ground(100,100,40,20);  
 platform2 = new Ground(200,200,40,20); 
 platform3 = new Ground(300,300,40,20); 
 box1 = new Box(20,110,20,30); 
 box2 = new Box(20,110,20,30); 
 box3 = new Box(20,110,20,30); 
 box4 = new Box(25,115,20,30); 
 box5 = new Box(25,115,20,30); 
 box6 = new Box(30,120,20,30); 

 box7 = new Box(20,210,20,30); 
 box8 = new Box(20,210,20,30); 
 box9 = new Box(20,210,20,30); 
 box10 = new Box(25,215,20,30); 
 box11 = new Box(25,215,20,30); 
 box12 = new Box(30,220,20,30); 

 box13 = new Box(20,310,20,30); 
 box14 = new Box(20,310,20,30); 
 box15 = new Box(20,310,20,30); 
 box16 = new Box(25,315,20,30); 
 box17 = new Box(25,315,20,30); 
 box18 = new Box(30,320,20,30); 

 slingshot = new Slingshot(rect.body,{x:10,y:110})
}

function draw() {
  if(backgroundImg)
        background(backgroundImg);
    
        noStroke();
        textSize(35)
        fill("white")
        text("Score  " + score, width-300, 50)  
 
  
  platform1.display(); 
  platform2.display(); 
  platform3.display(); 

  box1.display(); 
  box2.display(); 
  box3.display(); 
  box4.display(); 
  box5.display(); 
  box6.display(); 
 
  box7.display(); 
  box8.display(); 
  box9.display(); 
  box10.display(); 
  box11.display(); 
  box12.display(); 

  box13.display(); 
  box14.display(); 
  box15.display(); 
  box16.display(); 
  box17.display(); 
  box18.display(); 



  box1.score(); 
  box2.score(); 
  box3.score(); 
  box4.score(); 
  box5.score(); 
  box6.score(); 
 
  box7.score(); 
  box8.score(); 
  box9.score(); 
  box10.score(); 
  box11.score(); 
  box12.score(); 

  box13.score(); 
  box14.score(); 
  box15.score(); 
  box16.score(); 
  box17.score(); 
  box18.score(); 
 
  function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
    slingshot.fly();
}
  text("Score:"+ score, 750,44); 

  drawSprites();
}

async function getBackgroundImg(){
  var response = await fetch("http://worldclockapi.com/api/json/est/now");
  var responseJSON = await response.json();

  var datetime = responseJSON.datetime;
  var hour = datetime.slice(11,13);
  console.log(responseJSON.datetime);
  console.log(hour); 
  
  if(hour>=06 && hour<=18){
      bg = "sprites/bg1.png";
  }
  else{
      bg = "sprites/bg2.jpg";
  }

  backgroundImg = loadImage(bg);
  console.log(backgroundImg);
}