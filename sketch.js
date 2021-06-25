
var dustbin1,dustbin2,dustbin3;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ballSprite,groundSprite;
var stick1,stick2;




function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER)
	
	engine = Engine.create();
	world = engine.world;

	stick1 = createSprite(500,620,15,150)
	stick2 = createSprite(790,620,15,150)

	//Create the Bodies Here.
	 	
	ground = Bodies.rectangle(width/2 , 690 , 800 ,10, {isStatic:true});
	World.add(world, ground);
    ball = new paper(200,200,20)
	Engine.run(engine);
  
}

function draw() {
	rectMode(CENTER);
	background(0);
	rect(ground.position.x,ground.position.y,800,10);
	ball.display();
	stick1.display();
	stick2.display();
   }
  function keyPressed() {
	if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball.body,ball.body.position,{x:35,y:-80})
	   
	 }
   }
   