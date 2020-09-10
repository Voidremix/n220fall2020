
let xPos = 0;
let yPos = 75;
let xSpeed = 5;
let ySpeed = 3;

function draw(){
    console.log;
}

function setup() {

    createCanvas(800,600);
}

function draw() {
    background (15, 37, 195);
    xPos = xPos + xSpeed;
    
    fill(255);

    if( xPos > 300) {
        fill (0);
    }

    if ( xPos > 800) {
        xPos = 0;
    }

    circle(xPos, yPos, 30); 
}