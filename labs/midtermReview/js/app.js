//Define ball object

let myBall = {
    bx : 100,
    by : 100,
    br : 20
}

//Define paddle object

let myPaddle = {
    rx : 575,
    ry : 175,
    rw : 10,
    rh : 75
}

//Define paddle velocity

var paddleVel = 2;


//Give ball velocity

var bvx = -2;
var bvy = 2;

function setup() {
    createCanvas(600,400);
}

function draw() {
    background(200, 0, 150);

//Draw the player's paddle

    fill (0,100,240);
    rect(myPaddle.rx, myPaddle.ry, myPaddle.rw, myPaddle.rh);

//Draw a ball to the screen

    fill(255);
    circle(myBall.bx, myBall.by, myBall.br);

//Animate the ball in its velocity direction

    myBall.bx += bvx;
    myBall.by += bvy;

//Animate paddle in its velocity direction

    if (keyIsDown(UP_ARROW) && myPaddle.ry > 0) {
        myPaddle.ry -= paddleVel;
    }

    if (keyIsDown(DOWN_ARROW) && myPaddle.ry + myPaddle.rh < 400) {
        myPaddle.ry += paddleVel;
    }

//Bounce ball off walls

    if( myBall.bx < 20 ) {
        myBall.bx = 20;
        bvx *= -1;
    }

    if( myBall.by < 20 ) {
        myBall.by = 20;
        bvy *= -1;
    }

    if( myBall.by > 380 ) {
        myBall.by = 380;
        bvy *= -1;
    }

    if( hitTestPoint(myBall.bx, myBall.by, myPaddle.ry, myPaddle.rh) ) {
        bvx *= -1;
    }

}

//Bounce ball off paddle

function hitTestPoint(px, py, ry) {

    if(px + 20 >= myPaddle.rx && px + 20 <= myPaddle.rx + 10) {

        if(py >= ry && py <= ry + myPaddle.rh) {

            return true;
        }
    }
    return false;
}


