
function setup(){
    createCanvas(400,400);
}

function draw(){
    background(100);

    noFill();

    for(var i = 0; i < 25; i++) {

        circle(100, 100, i *30);
    }
}