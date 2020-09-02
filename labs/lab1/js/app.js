function setup(){
    let big = 600;
    let tiptop = 0;
    let reallyBig = 800;
    createCanvas(600,800);
    background(0,50,205);
    noStroke();

    fill(120, 0, 120);
    ellipse (60,80,100,100);

    fill(50, 150, 50);
    rect(0, 500, big, reallyBig);

    fill(210);
    triangle(150, 550, 550, 550, 350, tiptop);

    fill(210,105,30);
    arc(350, 550, 200, 275, PI, TWO_PI,);

    stroke(20);
    strokeWeight(50);
    line(tiptop, big, big, reallyBig);

    stroke(255);
    strokeWeight(10);
    line(tiptop, big, big, reallyBig);
    
}