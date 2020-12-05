
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 600);

	engine = Engine.create();
	world = engine.world;

	roof = Bodies.rectangle(400, 200, 250, 20 , {isStatic:true} );
	World.add(world, roof);
	
	//Create the Bodies Here.
 
	bob1 = new Bob(310,450);
	bob2 = new Bob(350,450);
	bob3 = new Bob(390,450);
	bob4 = new Bob(430,450);
	bob5 = new Bob(470,450);

	rope1 = new Rope(bob1.body, roof, -45*2, 0);
	rope2 = new Rope(bob2.body, roof, -25*2, 0);
	rope3 = new Rope(bob3.body, roof, -5*2, 0);
	rope4 = new Rope(bob4.body, roof, 15*2, 0);
	rope5 = new Rope(bob5.body, roof, 35*2, 0);


	Engine.run(engine);
  
}

function draw() {
  rectMode(CENTER);
  background(0);
  
  rect(roof.position.x, roof.position.y, 250, 20);
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

function keyPressed(){
	if(keyCode === UP_ARROW){
		Body.applyForce(bob1.body, bob1.body.position,{x:-50,y:-50});
	}
}



