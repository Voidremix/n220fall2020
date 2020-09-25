let dObj = { x:200, y:0, velocityY:2 }
let gravity = .2;

function setup () {
    createCanvas(600,600);
    
function draw() {
    background(0);
    fill(0,0,200);

    circle(50 + dObj.x, dObj.y, 100);
    dObj.y += dObj.velocityY;
    dObj.velocityY += gravity;
}

    var timer = 166;

    window.setInterval(function() {
        fallingDrops();
    }, timer);

}