var myCircle = {

    xPos: 200,
    yPos: 0,
    r: 25,
    color: [70, 0, 240]

}

function setup() {
    createCanvas(400, 300);

}

function draw() {
    fill(myCircle.color);
    myCircle.yPos += 1;
    circle(myCircle.xPos, myCircle.yPos, myCircle.r);
}