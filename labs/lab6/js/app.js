function setup() {
    createCanvas (500,500);
    background(110);
}


function draw(x) {

    let x = '';
  
    for (let i = 1; i <= num; i++) {
        rect(250, 250, 50, 50);
        fill(255,0,0);
      console.log(x += i);
    }
  }
  draw(4);