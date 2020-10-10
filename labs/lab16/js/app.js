
var myCircles = [
    { x: 50, y: 150, r: 10 },
    { x: 250, y: 300, r: 14 },
    { x: 100, y: 50, r: 8 },
    { x: 350, y: 225, r: 25 },
];

function setup() {
    createCanvas(400, 400);

}

function draw() {
    for(var i = 0; i < myCircles.length; i++) {
        circle(myCircles.x, myCircles.y, myCircles.r);
        myCircles.r ++;
        
    }
}