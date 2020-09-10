let xPos = 0;
let yPos = 0;
let xSpeed = 5;
let ySpeed = 5;
let xWidth = 775;
let yWidth = 575;

function setup(){

    createCanvas(800,600);
    background(60,60,60);
}

function draw(){

    fill(0,255,0);

    xPos = xPos + xSpeed;
    yPos = yPos + ySpeed;

    if (xPos > xWidth){
        xSpeed = xSpeed * -1;
    }

    if (xPos < 0){
        xSpeed = xSpeed * -1;
    }

    if (yPos > yWidth){
        ySpeed = ySpeed * -1;
    }

    if (yPos < 0){
        ySpeed = ySpeed * -1;
    }
    circle(xPos, yPos, 30);
}