//Create ball object

var ball = { 
    x: 100, 
    y: 100,
    velocityX: 2, 
    velocityY: 2,

    //Animate ball velocity and draw ball to screen
    update: function() {
        noFill();
        stroke(255, 238, 130);
        circle(this.x, this.y, 10);

        this.x += this.velocityX;
        this.y += this.velocityY;
    }
};

//Create paddle object

var paddle = {
    x: 100, 
    y: 350, 
    w: 150, 
    h: 20,

    //Animate paddle velocity and draw paddle to screen

    update: function() {
        noFill();
        stroke(143, 251, 255);
        rect(this.x, this.y, this.w, this.h);

    //Setup player paddle controls

        if(keyIsDown(LEFT_ARROW)) {
            this.x -= 2;
        }
    
        if(keyIsDown(RIGHT_ARROW)) {
            this.x += 2;
        }
    }
};
    
//Define an array of blocks

var blocks = [];
    
    //Loop through the array

    for(var i = 0; i < 6; i++) {
        blocks[i] = { x: i * 60, y: 10 };
    }

//Setup function to create canvas space
    
function setup() {
    createCanvas(400, 400);
}

//Draw function to refresh

function draw() {
    background(70);
    
    //Update ball and paddle positions on screen

    ball.update();
    paddle.update();

    //Bounce ball off of RIGHT wall

    if(ball.x > 400) {
        ball.x = 400;
        ball.velocityX *= -1;
    }
    
    //Bounce ball off of LEFT wall

    if(ball.x < 0) {
        ball.x = 0;
        ball.velocityX *= -1;
    }
    
    //Bounce ball off of TOP wall
    
    if(ball.y < 0) {
        ball.y = 0;
        ball.velocityY *= -1;
    }
    
    //Ball will bounce off of paddle with return velocity

    if(hitTestPoint(ball.x, ball.y, paddle.x, paddle.y, paddle.w, paddle.h) ) {
        ball.velocityY *= -1;
    }

    //Loop through array of bricks
    
    for(var i = 0; i < blocks.length; i++) {
        var b = blocks[i];
        rect(b.x, b.y, 60, 20);
        
        //Test - if brick has been hit, send ball with negative return velocity

        if(hitTestPoint(ball.x, ball.y, b.x, b.y, 60, 20)) {
            ball.velocityY *= -1;
    
            //Remove block from array

            blocks.splice(i, 1);
        }
    }
    
}
    
//Set hitbox boundaries for paddle

function hitTestPoint(px, py, bx, by, bw, bh) {
    
    if(px > bx && px < bx + bw) {

        if(py > by && py < by + bh) {
            
            //Ball is hitting paddle

            return true;
        }
    }
    
    //Ball has not hit paddle

    return false;
}