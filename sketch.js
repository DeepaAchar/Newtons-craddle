const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
const Constraint=Matter.Constraint;

var engine,world;
var ground,bob1,bob2,rope1,rope2;

function setup() {
  createCanvas(1200,800);
  
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(600,100,1200,10);

  bob1=new Bob(300, 250, 50);
  bob2=new Bob(200, 250, 50);

  rope1=new Rope(bob1.body,ground.body,300,0);
  rope2=new Rope(bob2.body,ground.body,200,0);
}

function draw() {
  background(255,255,255); 
  Engine.update(engine);
  
  ground.display();
  bob1.display();
  bob2.display();
  rope1.display();
  rope2.display();
 
  ground.display();
 
}