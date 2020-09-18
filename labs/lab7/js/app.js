function setup () {
    createCanvas (400,400);
    background (100);
}

function draw(){
    for(var i =50; i >0; i--) {

        stroke (0);
        circle(200,200, i*4);
    }
}