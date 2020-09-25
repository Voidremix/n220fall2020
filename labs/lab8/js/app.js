let MyArray = ["#f0faf0", "#331d18", "#ff638d"];

function setup(){
    createCanvas(300,400);

    for (var i=0; i < MyArray.length; i++) {
        fill( MyArray[i] );
        rect(50 + (40*i)), 200, 50, 50);
    }

}