function setup(){
    let big = 400;
    let tiptop = 0;
    createCanvas(600,800);
    background(0,50,205);
    noStroke();

    fill(120, 0, 120);
    ellipse (60,80,100,100);


    fill(210);
    triangle(150, 500, 550, 500, 350, tiptop);


    fill(210,105,30);
    arc(350, 500, big, big, PI, TWO_PI,);

    strokeWeight(20);
    line(0, 600, 600, 800);
    
}