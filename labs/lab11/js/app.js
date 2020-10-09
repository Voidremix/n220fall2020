let xd;
let colorsArray = ['rgb(252, 186, 3)', 'rgb(108, 245, 149)', 'rgb(149, 106, 247)', 'rgb(255, 148, 110)'];

function setup() {
    createCanvas(720, 400);
    xd = 'rgb(255,0,0)';
  }
  
  function draw() {
    background(100);
    strokeWeight(2);
    noStroke();
    fill(xd);
    ellipse(360, 200, 200, 200);
  }
  
  function mousePressed() {
    let d = dist(mouseX, mouseY, 360, 200);
    if (d < 100) {
        let rnd = (int)(Math.random() * 4);
        xd = colorsArray[rnd];
    }
  }