
var myGraphic = {

    w: 50,
    h: 100,
    xPos: 200,
    yPos: 150,
    color: [10, 60, 210]

}

function setup() {
    createCanvas(400, 300);

}

function draw() {
    fill(myGraphic.color);
    rect(myGraphic.xPos, myGraphic.yPos, myGraphic.w, myGraphic.h);
}