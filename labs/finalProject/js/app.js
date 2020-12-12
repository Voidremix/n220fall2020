
//setup parameters
const PADDLE_SPEED = 0.6; //fraction of screen width per/sec

const BALL_SPEED = 0.4; //fraction of screen height per/sec

const BALL_SPIN = 0; //ball deflection off of paddle

const PADDLE_WIDTH = .1; //paddle width as a function of screen width

const BRICK_ROWS = 8; //initial number of brick rows

const BRICK_COL = 14; //initial number of brick columns

const BRICK_GAP = .3; //gap between bricks as a function of wall width

const MARGIN = 6; //number of empty rows above the bricks

const MAX_LEVEL = 10; //maximum game level (+2 brick rows per level)

const WALL = .02; //wall, ball, paddle size as a fraction of shortest screen dimension

//colors
const COLOR_BACKGROUND = "black";

const COLOR_PADDLE = "aqua";

const COLOR_WALL = "grey"; 

const COLOR_BALL = "white";

//definitions
const Direction = {
    LEFT: 0,
    RIGHT: 1,
    STOP: 2
}

//draw canvas
var canv = document.createElement("canvas");

document.body.appendChild(canv);
var ctx = canv.getContext("2d");

//game variables
var ball, paddle, level, bricks = [];

//dimensions
var height, width, wall
setDimensions();

//event listeners

document.addEventListener("keydown", keyDown);
document.addEventListener("keyup", keyUp);
window.addEventListener("resize", setDimensions);

//animate loop

var timeDiff, timeLast;
requestAnimationFrame(loop);

function loop(timeNow){
    if(!timeLast){
        timeLast = timeNow;
    }


    //calculate time difference

    timeDiff = (timeNow - timeLast) / 1000; //time in seconds
    timeLast = timeNow;

    //update

    updatePaddle(timeDiff);
    updateBall(timeDiff);
    updateBricks(timeDiff);

    //draw to canvas

    drawBackground();
    drawWalls();
    drawPaddle();
    drawBricks();
    drawBall();

    //call next loop

    requestAnimationFrame(loop);
}

function applyBallSpeed(angle) {
    //keep angle between 30 and 150 degrees
    if(angle < Math.PI / 6){
        angle = Math.PI / 6;
    } else if (angle > Math.PI * 5 / 6){
        angle = Math.PI * 5 / 6;
    }

    //update x and y velocities of the ball
    ball.xVel = ball.spd * Math.cos(angle);
    ball.yVel = -ball.spd * Math.sin(angle);
}

function createBricks(){

    //row dimensions
    let minY = wall;
    let maxY = ball.yPos - ball.height * 3.5;
    let totalSpaceY = maxY - minY;
    let totalRows = MARGIN + BRICK_ROWS + MAX_LEVEL * 2;
    let rowheight = totalSpaceY / totalRows;
    let gap = wall * BRICK_GAP;
    let h = rowheight - gap

    //column dimensions
    let totalSpaceX = width - wall * 2;
    colwidth = (totalSpaceX - gap) / BRICK_COL;
    let w = colwidth - gap;

    //bricks array
    bricks = [];
    let col = BRICK_COL;
    let rows = BRICK_ROWS + level * 2;
    let color, left, top, rank, rankHigh;
    rankHigh = rows * 0.5 - 1;
    for (let i = 0; i < rows; i++){
        bricks[i] = [];
        rank = Math.floor(i * 0.5);
        color = getBrickColor(rank, rankHigh);
        top = wall = (MARGIN + i) * rowheight;
        for (let j = 0; j < col; j++){
            left = wall + gap + j * colwidth;
            bricks[i][j] = new Brick(left, top, w, h, color);
        }
    }
}

function drawBackground(){
    ctx.fillStyle = COLOR_BACKGROUND;
    ctx.fillRect(0, 0, width, height);
}

function drawBall(){
    ctx.fillStyle = COLOR_BALL;
    ctx.fillRect(ball.xPos - ball.width * 0.5, ball.yPos - ball.height * 0.5, ball.width, ball.height );
}

function drawBricks() {
    for(let row of bricks) {
        for(let brick of row) {
            if (brick == null) {
                continue;
            }
            ctx.fillStyle = brick.color;
            ctx.fillRect(brick.left, brick.top, brick.width, brick.height)
        }
    }
}

function drawPaddle(){
    ctx.fillStyle = COLOR_PADDLE;
    ctx.fillRect(paddle.xPos - paddle.width * 0.5, paddle.yPos - paddle.height * 0.5, paddle.width, paddle.height );
}

function drawWalls(){
    let halfwall = wall * 0.5;
    ctx.strokeStyle = COLOR_WALL;
    ctx.beginPath();
    ctx.moveTo(halfwall, height);
    ctx.lineTo(halfwall, halfwall);
    ctx.lineTo(width - halfwall, halfwall);
    ctx.lineTo(width - halfwall, height);
    ctx.stroke();
}

//red = 0, orange = 0.33, yellow = 0.67, green = 1
function getBrickColor(rank, highestRank){
    let fraction = rank / highestRank
    let r, g, b = 0;

    if (fraction <= 0.67) {
        r = 255;
        g = 255 * fraction / 0.67;
    }

    else {
        r = 255 * (1 - fraction) / 0.33;
        g = 255;
    }

    return "rgb(" + r + "," + g + "," + b + ")";
}

function keyDown(event) {
    switch(event.keyCode) {
        case 32: //spacecbar to serve the ball
            serve();
            break;
        case 37: //left arrow move left
            movePaddle(Direction.LEFT);
            break;
        case 39: //right arrow move right
            movePaddle(Direction.RIGHT);
            break;
    }
}

function keyUp(event) {
    switch(event.keyCode) {
        case 37: //left arrow stop movement
        case 39: //right arrow top movement
            movePaddle(Direction.STOP);
            break;
    }
}

function movePaddle(direction){
    switch(direction){
        case Direction.LEFT:
            paddle.xVel = -paddle.spd;
            break;
        case Direction.RIGHT:
            paddle.xVel = paddle.spd;
            break;
        case Direction.STOP:
            paddle.xVel = 0;
            break;
    }
}

function newGame(){
    level = 0;
    paddle = new Paddle();
    ball = new Ball();
    createBricks();
}

function outOfBounds(){
    newGame();
}

function serve() {
    //disable serve during motion
    if(ball.yVel != 0) {
        return;
    }

    //random angle between 45 and 135 degrees
    let angle = Math.random() * Math.PI / 2 + Math.PI / 4;
    applyBallSpeed(angle);
}

function setDimensions(){
    height = window.innerheight;
    width = window.innerwidth;
    wall = WALL * (height < width ? height : width);
    canv.width = width;
    canv.height = height;
    ctx.linewidth = wall;
    newGame();
}

function updateBall(delta){
    ball.xPos += ball.xVel * delta;
    ball.yPos += ball.yVel * delta;

    //bounce ball off of walls
    if(ball.xPos < wall + ball.width * 0.5){
        ball.xPos = wall + ball.width * 0.5;
        ball.xVel = -ball.xVel;
    } else if (ball.xPos > canv.width - wall - ball.width * 0.5) {
        ball.xPos = canv.width - wall - ball.width * 0.5;
        ball.xVel = -ball.xVel;
    } else if (ball.yPos < wall + ball.height * 0.5) {
        ball.yPos = wall + ball.height * 0.5;
        ball.yVel = -ball.yVel;
    }

    //bounce off of paddle
    if(ball.yPos > paddle.yPos - paddle.height * 0.5 - ball.height * 0.5 
        && ball.yPos < paddle.yPos + paddle.height * 0.5
        && ball.xPos > paddle.xPos - paddle.width * 0.5 - ball.width * 0.5
        && ball.xPos < paddle.xPos + paddle.width * 0.5 + ball.width * 0.5) {
            ball.yPos = paddle.yPos - paddle.height * 0.5 - ball.height * 0.5;
            ball.yVel = -ball.yVel;

            //modify ball angle from ball spin
            let angle = Math.atan2(-ball.yVel, ball.xVel);
            angle += (Math.random() * Math.PI / 2 - Math.PI / 4) * BALL_SPIN;
            applyBallSpeed(angle);
        }
    
    //handle out of bounds
    if(ball.yPos > height){
        outOfBounds();
    }

    //move stationary ball with paddle
    if(ball.yVel == 0){
        ball.xPos = paddle.xPos;
    }
}

function updateBricks(delta){

    //check for ball collision
OUTER: for (let i = 0; i < bricks.length; i++) {
        for (let j = 0; j < BRICK_COL; j++) {
            if (bricks[i][j] != null && bricks[i][j].intersect(ball)) {
                bricks[i][j] = null;
                ball.yVel = -ball.yVel;

                break OUTER;
            }
        }
    }
}

function updatePaddle(delta){
    paddle.xPos += paddle.xVel * delta;

    //stop paddle at walls
    if(paddle.xPos < wall + paddle.width * 0.5) {
        paddle.xPos = wall + paddle.width * 0.5;
    } else if (paddle.xPos > width - wall - paddle.width * 0.5){
        paddle.xPos = width - wall - paddle.width * 0.5;
    }
}

function Ball(){
    this.width = wall;
    this.height = wall;
    this.xPos = paddle.xPos;
    this.yPos = paddle.yPos - paddle.height / 2 - this.height / 2;
    this.xVel = 0;
    this.yVel = 0;
    this.spd = BALL_SPEED * height;
}

function Brick(left, top, w, h, color){
    this.width = w;
    this.height = h;
    this.bottom = top + h;
    this.left = left;
    this.right = left + width;
    this.top = top;
    this.color = color;

    this.intersect = function(ball) {
        let bBot = ball.yPos + ball.height * 0.5;
        let bLeft = ball.xPos - ball.width * 0.5;
        let bRight = ball.xPos + ball.width * 0.5;
        let bTop = ball.yPos - ball.height * 0.5;
        return this.left < bRight
        && bLeft < this.right
        && this.bot > bTop
        && bBot > this.top;
    }
}

function Paddle(){
    this.width = PADDLE_WIDTH * width;
    this.height = wall;
    this.xPos = width / 2;
    this.yPos = height - this.height * 3;
    this.xVel = 0;
    this.spd = PADDLE_SPEED * width;
}