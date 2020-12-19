const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world,box1,box2,box3,box4,ground,log2,pig1,pig2,log1,log3,log4,box5;


function setup() {
  createCanvas(1200,600);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(700,320,70,70);
  box2=new Box(920,320,70,70);
  ground=new Ground(600,height,1200,10);
  pig1=new Pig(810,350);
  pig2=new Pig(810,220)
  log1=new Log(810,260,10,PI/2)
  log2=new Log(810,180,10,PI/2)
  box3=new Box(700,240,70,70)
  box4=new Box(920,240,70,70)
  log3=new Log(760,120,150,PI/7)
  log4=new Log(760,120,150,-PI/7)
  box5=new Box(810,160,70,70)
}
function draw() {
  background(0);  
  Engine.update(engine);
  
   box1.display();
   box2.display();
   box3.display();
   box4.display();
   ground.display();
   pig1.display();
   pig2.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   box5.display();
}