
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var roof, bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var rope1, rope2, rope3, rope4, rope5,

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,700,70)
	bobObject1 = new Bob(400,600)
	bobObject2 = new Bob(500,600)
	bobObject3 = new Bob(600,600)
	bobObject4 = new Bob(300,600)
	bobObject5 = new Bob(200,600)

	rope1 = new Rope(roof.body,bobObject1.body)
	rope2 = new Rope(roof.body,bobObject2.body,500,100)
	rope3 = new Rope(roof.body,bobObject3.body,600,100)
	rope4 = new Rope(roof.body,bobObject4.body,300,100)
	rope5 = new Rope(roof.body,bobObject5.body,200,100)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(180);
  roof.display();
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
 
}



