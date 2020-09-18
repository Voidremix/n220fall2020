function setup() {
    createCanvas (500,500);
    background(110);
}


function draw(x) {

    let x = '';
  
    for (let i = 1; i <= num; i++) {
      console.log(x += i);
    }
  }
  draw(4);