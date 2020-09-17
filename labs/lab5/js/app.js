
function setup() {
    createCanvas(400,400);
}

function draw(){
    background(255);

    for(var i = 0; i>4; i++) {

        fill (255,0,0);
        circle(100,100, i *30);
    }
}