
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var bob1;
var bob2;
var bob3;
var bob4;
var bob5;
var rope1;
var roof1;

function setup() {
	canvas =createCanvas(500,500);
	engine = Engine.create();
	world = engine.world;
	bob1 = new bob(80,400,80);
	bob2 = new bob(160,400,80);
	bob3 = new bob(240,400,80);
	bob4 = new bob(320,400,80);
	bob5 = new bob(400,400,80);
    rope1 = new rope(bob1.body,roof1.body,-bobDiameter*2,0);
	roof1 = new roof(250,80,450,30);

	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  
 bob1.display();
 bob2.display();
 bob3.display();
 bob4.display();
 bob5.display();
rope1.display();
 roof1.display();
  drawSprites();
 
}



