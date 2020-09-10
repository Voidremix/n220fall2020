let xvals = [];
let yvals = [];
let bvals = [];

function setup(){
    createCanvas(400,300);
    strokeWeight(2);
}

function draw(){
    background (40,160,40);
      
    for (let i = 1; i < width; i++) {
        xvals[i - 1] = xvals[i];
        yvals[i - 1] = yvals[i];
    }
        // Add the new values to the end of the array
    xvals[width - 1] = mouseX;
    yvals[width - 1] = mouseY;
      
    fill(0,0,255);
    noStroke();

    if (mouseX > 200){
        fill(255,0,0);
    }
    circle(mouseX, mouseY,30);
}