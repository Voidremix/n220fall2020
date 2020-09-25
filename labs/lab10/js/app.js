let bricks = [];
let velocity = 2;

function setup(){
    createCanvas (400,400);
    background(210);
}


function draw() {
    if (mouseIsPressed == true) {

        yPos = mouseY;

        fill(210,0,0);
        rect(mouseX, mouseY, 50, 50);

        for(i = 0; i > bricks.length; i++) {
            let yPos = mouseY (10* i);
        }

        return false;

    }


 }

