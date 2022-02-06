const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine,world;
var boxes = [];
var ground;
var options;
var block;

function setup() {
    createCanvas(500,500);
    console.log("Drag the mouse on the canvas");

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(250,height+20,width,40);

    Engine.run(engine);
    }
function mouseDragged() {
    boxes.push(new Box(mouseX,mouseY,random(15,40),random(15,40)));
}
function draw() {
    background(80);
    Engine.update(engine);

    for(var i = 0;i < boxes.length; i++) {
        fill("black");
        boxes[i].display();

    }

    ground.display();
}