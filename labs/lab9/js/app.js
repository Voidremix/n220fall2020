let positionsX = new Array(11);
let positionsY = new Array(11);

function setup() {
    createCanvas(400,400);

}

function draw() {

    background(210);

    positionsX.push( mouseX );
    positionsX.shift();

    positionsY.push( mouseY );
    positionsY.shift();

    for (var i=0; i < positionsX.length; i++) {
        circle(positionsX[i], positionsY[i], 20);
    }
}