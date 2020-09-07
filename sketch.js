
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(600, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
 paper1 = new paper(100,100,1,options);
ground1 = new ground(550,300,600,20);
dustbin1 = new dustbin(530,500,150,15);
dustbin2 = new dustbin(510,480,15,50);
dustbin3 = new dustbin(550,520,15,50);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  Engine.update(engine);

  World.add(world, dustbin1);
  World.add(world, dustbin2);
  World.add(world, dustbin3);
  World.add(world, ground1);
  World.add(world, paper1);

  paper1.display();
  ground1.display();
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  
  keyPressed();
  drawSprites();
 
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper1.body, paper1.body.position, {x:85,y:-85})
	}
}


