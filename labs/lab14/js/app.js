
let myGraphic = {

    width: 50,
    height: 100,
    xPos: 200,
    yPos: 150,
    fill: "#34ebeb"

};

function setup() {
    createCanvas(400, 300);
    fill(210);
}

function draw(){
    fill(myGraphic.fill);
    rect(myGraphic.xPos, myGraphic.yPos, myGraphic.width, myGraphic.h);
}