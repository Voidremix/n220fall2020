
function setup(){
    createCanvas(1400,200);
    background(100);
}

function draw(){

    for(var i = 0; i < 25; i++) {

        if (i%3==0&&i%5==0){
            fill (3, 115, 252)
            rect(50 + (i*50), 85, 30, 30);
        }
            else {
                if (i%3==0){
                    fill (244, 3, 252);
                    circle(50 + (i*50), 100, 15);
            }
                
            if (i%5==0){
                    fill (3, 252, 3);
                    rect(50 + (i*50), 85, 30, 30);
            }
        }
            
        if(i%3!=0 && i%5!=0){
                fill (0);
                circle(50 + (i*50), 100, 15);
        }

    }
}