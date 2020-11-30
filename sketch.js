const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint= Matter.Constraint;

var engine, world;

var platform;
var backgroungIMG;

function preload(){
backgroungIMG=loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)
    platform=new Ground(600,50,330,10);

   
    bird = new Bird(100,100);
    chain=new Chain(bird.body,{x:450,y:50});
    bird2 = new Bird(200,100);
    chain2=new Chain(bird2.body,{x:650,y:50});
    bird3 = new Bird(100,100);
    chain3=new Chain(bird3.body,{x:500,y:50});
    bird4 = new Bird(100,100);
    chain4=new Chain(bird4.body,{x:550,y:50});
    bird5 = new Bird(200,100);
    chain5=new Chain(bird5.body,{x:600,y:50});
    bird6 = new Bird(100,100);
    chain6=new Chain(bird6.body,{x:700,y:50});
}

function draw(){
    background(backgroungIMG);
    Engine.update(engine);
    
chain.display();
    
platform.display();
    bird.display();
    chain2.display();
    bird2.display();
    chain3.display();
    bird3.display();
    bird4.display();
    chain4.display();
    bird5.display();
    chain5.display();
    bird6.display();
    chain6.display();
}

