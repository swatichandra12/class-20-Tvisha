const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//is supposed to be made for our personal game
var engine;
var world;

var angle=60;
var ball;
var ground;


function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
  
  //creating a ball body
//trying to make my ball bounce with the help of property called restitution

var b={
  restitution:1.5,
  
}


  ball=Bodies.circle(200,200,20,b);
  World.add(world,ball);

  //creating another body called as ground

  //to make it stay at a place i will use static property

  var g= {
            isStatic:true,
  }

ground=Bodies.rectangle(200,300,600,40,g);
World.add(world,ground)


}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  //to display the output i am using my p5.js 

  //inorder to display the ball i need to use ellipse()

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20)

 rectMode(CENTER);
 rect(ground.position.x,ground.position.y,400,40)


  
  
}

