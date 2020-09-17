
function setup(){
    createCanvas(1400,200);
    background(100);
}

function draw(){

    for(var i = 0; i < 25; i++) {
        fill (0);
        circle(50 + (i*50), 100, 15);

        if (i % 3 == 0)
            fill (169, 3, 252);

        if (i % 5 == 0)
            rect(50 + (i*50), 100, 15, 15);
            fill (3, 252, 74);

        if (i % 3 == 0 && i % 5 == 0)
            rect(50 + (i*50), 100, 15, 15);
            fill (5, 91, 250);

    }
}