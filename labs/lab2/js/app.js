
let xPos = 0;
let yPos = 100;
let xSpeed = 2;
let ySpeed = 2;


function draw() {

    createCanvas(600,800);
    background(0,50,205);
    noStroke();

    xPos = xPos + xSpeed;
	yPox = yPos + ySpeed;
	circle(xPos, yPos, 30)
}