function setup(){createCanvas(1560,1560);}

var charX = 780;
var charY = 780;
var on = 0;
function draw(){
    fill(0,0,0);
    if(on == 1){
    ellipse(mouseX,mouseY,50,50);}
    if(mousePressed == true && on == 0){on = 1;}
    if(mousePressed == true && on == 1){on = 0;}
    
    
}
var keyPressed = function(){background(255,255,255);}
