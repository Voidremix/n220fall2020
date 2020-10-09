let ydraw = [];
let xdraw = [];
let velocity = 1;
let intCount = 0;

function setup() {
    createCanvas (500,500);
}

function randColorNum() {
    return (int) (Math.random() * 255);
}

function randColorCircle(x) {
    fill(randColorNum(), randColorNum(), randColorNum());
    ellipse(xdraw[x], ydraw[x] + velocity, 15);
}

function draw() {
    noStroke();
    frameRate(120);

    background(210);

    if (mouseIsPressed) {
        
        ydraw [intCount] = mouseY;
        xdraw [intCount] = mouseX;
        intCount++;
    }

    for( var x=0; x < intCount; x++) {

        randColorCircle(x);

        ydraw [x] = ydraw[x] + velocity;
    }

}