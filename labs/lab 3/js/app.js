let xvals = [];
let yvals = [];
let bvals = [];

function setup(){
    createCanvas(400,300);
    strokeWeight(2);
}

function draw(){
    background (255);
      
    for (let i = 1; i < width; i++) {
        xvals[i - 1] = xvals[i];
        yvals[i - 1] = yvals[i];
    }
        // Add the new values to the end of the array
    xvals[width - 1] = mouseX;
    yvals[width - 1] = mouseY;
      
    fill(255);
    noStroke();
    circle()
      
    for (let i = 1; i < width; i++) {
        stroke(255);
        point(i, xvals[i] / 3);
        stroke(0);
        point(i, height / 3 + yvals[i] / 3);
    }
}