let MyArray = ["#f0faf0", "#5e4a0c", "#ff638d"];

function setup(){
    createCanvas(300,400);
    background(0,200,0);
    noStroke();

    for (var i=0; i < MyArray.length; i++) {
        fill( MyArray[i] );
        rect(50 + (50*i), 100, 50, 50);
    }

}