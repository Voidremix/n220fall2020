let ybricks = [];
let xbricks = [];
let velocity = 10;
let intCount = 0;
let drawable;

function setup(){
    createCanvas (400,400);
    background(210);

    frameRate (5);
}


function draw() {

    background(210);

    if (mouseIsPressed) {
        
        ybricks [intCount] = mouseY;
        xbricks [intCount] = mouseX;
        intCount++;
    }

    for( var x=0; x < intCount; x++) {

        fill(210,0,0);
        rect(xbricks[x], ybricks[x] + velocity, 50, 50);

        ybricks [x] = ybricks[x] + velocity;
    }

}

