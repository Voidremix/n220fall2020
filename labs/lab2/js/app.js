
let xPos = 0;
let yPos = 75;
let xSpeed = 5;
let ySpeed = 3;


function setup() {

    createCanvas(600,600);
}

function draw() {
    background (15, 37, 195);
    xPos = xPos + xSpeed;
    
    fill(255);

    if( xPos > 300) {
        fill (0);
    }

    if ( xPos > 600) {
        xPos = 0;
    }

    circle(xPos, yPos, 30); 
}