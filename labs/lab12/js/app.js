var circleX = 250;
var circleY = 250;
var circleColor = ('rgb(0,0,0)')

function setup() {
    createCanvas(500,500);

}

function draw() {
    background(100);
    noStroke();
    fill(circleColor);
    ellipse(circleX, circleY, 30);
    frameRate(60);
    start();

}

function start() {
    placement();
    
    if(mouseY < circleY) {
        circleY = circleY -3;
    }

    if(mouseY > circleY) {
        circleY = circleY + 3;
    }

    if(mouseX < circleX) {
        circleX = circleX -3;
    }

    if(mouseX > circleX) {
        circleX = circleX + 3;
    }

};

function placement() {

    if(Math.abs (mouseX - circleX) <= 7 && Math.abs (mouseY - circleY) <= 7 ) {
        circleColor = 'rgb(255,0,0)';
    }

    else {
        circleColor = 'rgb(0,0,0)';
    }

}   

