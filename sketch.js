const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var ball_options={
		isStatic:false,
		restitution:1,
	}

	var roof_options={
		isStatic:true			
	}

	bob1 = Bodies.circle(300,250,27,ball_options);
    World.add(world,bob1);
	rope1 = Matter.Constraint.create({
		bodyA:bob1,
		pointB:{x:300,y:110},
		length:200
	});
	World.add(world,rope1);
	bob2 = Bodies.circle(330,250,27,ball_options);
    World.add(world,bob2);
	rope2 = Matter.Constraint.create({
		bodyA:bob2,
		pointB:{x:350,y:110},
		length:200
	});
	World.add(world,rope2);
	bob3 = Bodies.circle(400,250,27,ball_options);
    World.add(world,bob3);
	rope3 = Matter.Constraint.create({
		bodyA:bob3,
		pointB:{x:400,y:110},
		length:200
	});
	World.add(world,rope3);
	bob4 = Bodies.circle(450,250,27,ball_options);
    World.add(world,bob4);
	rope4 = Matter.Constraint.create({
		bodyA:bob4,
		pointB:{x:450,y:110},
		length:200
	});
	World.add(world,rope4);
	bob5 = Bodies.circle(500,250,27,ball_options);
    World.add(world,bob5);
	rope5 = Matter.Constraint.create({
		bodyA:bob5,
		pointB:{x:500,y:110},
		length:200
	});
	World.add(world,rope5);

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);
  ellipse(bob1.position.x,bob1.position.y,50);
  ellipse(bob2.position.x,bob2.position.y,50);
  ellipse(bob3.position.x,bob3.position.y,50);
  ellipse(bob4.position.x,bob4.position.y,50);
  ellipse(bob5.position.x,bob5.position.y,50);

  line(rope1.pointB.x,rope1.pointB.y,bob1.position.x,bob1.position.y);
  line(rope2.pointB.x,rope2.pointB.y,bob2.position.x,bob2.position.y);
  line(rope3.pointB.x,rope3.pointB.y,bob3.position.x,bob3.position.y);
  line(rope4.pointB.x,rope4.pointB.y,bob4.position.x,bob4.position.y);
  line(rope5.pointB.x,rope5.pointB.y,bob5.position.x,bob5.position.y);

  
  

 
}

function keyPressed() {
	if (keyCode===UP_ARROW){
		Matter.Body.applyForce(bob1,{x:0,y:0},{x:-0.1,y:0});
	}
}
