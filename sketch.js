const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

let engine;
let world;

function setup() {
    createCanvas(400, 400);
    engine = Engine.create();

    options = {
        isStatic: true,
    };

    world = engine.world;
    rectMode(CENTER);
    ellipseMode(RADIUS);

    esquerda = Bodies.rectangle(10, 200, 20, 400, options);
    World.add(world, esquerda);

    direita = Bodies.rectangle(390, 200, 20, 400, options);
    World.add(world, direita);
    cima = Bodies.rectangle(200, 10, 400, 20, options);
    World.add(world, cima);
    baixo = Bodies.rectangle(200, 390, 400, 20, options);
    World.add(world, baixo);
}

function draw() {
    background(51);
    fill("orange");
    rect(esquerda.position.x, esquerda.position.y, 20, 400);
    rect(direita.position.x, direita.position.y, 20, 400);
    rect(cima.position.x, cima.position.y, 400, 20);
    rect(baixo.position.x, baixo.position.y, 400, 20);

    Engine.update(engine);
}
