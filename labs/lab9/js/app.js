let positions = [0,0,0,0];

function setup() {
    createCanvas(400,400);

}

function draw() {

    background(210);

    positions.push( mouseX );
    positions.shift();

    for (var i=0; i < positions.length; i++) {
        circle(positions[i], 150, 20);
    }
}