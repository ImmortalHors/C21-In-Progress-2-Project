
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var ball;
var ground,groundObj;
var world;
var engine;

function preload()
{
	
}

function setup() {
	createCanvas(1537, 700);
    engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	var ball_options = {
		isStatic: false,
		restitution: 0.2,
		friction:0,
		density: 2
	}

	ball = Bodies.circle(100, 200, 50, ball_options)
	World.add(world, ball)

	groundObj =  new Ground(width/2,670,width,20);
	leftSide = new Ground (1100,600,20,120)
	rightSide = new Ground (1300,600,20,120)



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  ellipse(ball.position.x,ball.position.y,50,50);
  groundObj.display()
  leftSide.display()
  rightSide.display()
 
  keyPressed()
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(ball,{x:ball.position.x, y:ball.position.y},{x:0.04,y:-0.04})

	}
}

