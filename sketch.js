
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(1300, 800);

	engine = Engine.create();
	world = engine.world;

	roof0 = new Roof(650,200,400,20)
	roof1 = new Roof(530,200,20,20)
	roof2 = new Roof(590,200,20,20)
	roof3 = new Roof(650,200,20,20)
	roof4 = new Roof(710,200,20,20)
	roof5 = new Roof(770,200,20,20)

	bob1 = new Bob(530,500)
	bob2 = new Bob(590,500)
	bob3 = new Bob(650,500)
	bob4 = new Bob(710,500)
	bob5 = new Bob(770,500)

	rope1 = new Rope(bob1.body,roof1.body,0,0)
	rope2 = new Rope(bob2.body,roof2.body,0,0)
	rope3 = new Rope(bob3.body,roof3.body,0,0)
	rope4 = new Rope(bob4.body,roof4.body,0,0)
	rope5 = new Rope(bob5.body,roof5.body,0,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);

  roof0.display();
  roof1.display();
  roof2.display();
  roof3.display();
  roof4.display();
  roof5.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
  
  drawSprites();
 
}

function keyPressed () {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob1.body,bob1.body.position,{x:-100, y:-100})
    }
}