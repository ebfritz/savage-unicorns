/* global ellipse */
/*DV DOES NOT TOUCH THIS FILE*/
function setup() {
createCanvas(1560,750)
}
var cooldown = 5000;
var secret = 0;
var color = 0;
var c = 0;
var c1 = 0;
var c2 = 0;
var c3 = 255;
var CharX =50;
var CharY = 430;
var lives = 1;
var Y = 0;
var Y2 = 0;
var counter = 0;
var powerUps = [-1];
var obstacles = [1560];
var Score = 0;
var difficulty = 10;
var dcounter = 0;
var delay = 70;
var failure = ["You Failure", "D.V. Is Better Than You", "You Have Been Eaten By An Angry Gnome","This Isn't Golf","You Are Trying To NOT Be Eaten","Your Score Is Lower Than Your Grade"];
var failurecounter = 0;
var highscore = 0;
var addObstacle = function(){
    obstacles.push(1560);
};
var addPowerUp = function(){
    obstacles.push(1560);
};
function draw() {
    if(lives > 0){
        //setup
        background(255,255,255);
        fill(c1,c2,c3);
        //Character
        triangle(CharX-25,CharY,CharX+25,CharY,CharX+100,CharY-75);
        ellipse(CharX,CharY,100,100);
        //Ground
        fill(0,0,0);
        rect(0,480,1560,10);
        textSize(100);
        if(Score > highscore){fill(255,215,0);}
        text(Score,50,630);
        fill(0,0,0);
        text(difficulty + "MPH",50,730)
        noFill();
        //Gravity
        if(CharY < 430){CharY += 4;}
            //Move Obstacles
            while(Y < obstacles.length){
                fill(255,0,0);
                noStroke();
                ellipse(obstacles[Y],455,50,50);
                if(-58 < CharX - obstacles[Y] && CharX - obstacles[Y] < 58 && -58 < CharY - 455 && 58 > CharY - 455){
                    lives -= 1;
                    }
                obstacles[Y] -= difficulty;
                Y += 1;
            }
        Y = 0;
        
        //Spawn Obstacles
        if(counter == delay){
            addObstacle();
            counter = 0;
    }
    counter += 1;
    Score += 1;
    if(dcounter == 250){
        difficulty += 2;
        dcounter = 0;}
    dcounter += 1;
    if(Score == cooldown){
        difficulty = int(random(10,20));
        delay -= 10;
        cooldown += 5000;
    }
}
    else{
    background(0,0,0);
    fill(c1,c2,c3);
    textSize(50);
    text("Player Color",100,40);
    fill(0,0,255);
    rect(100,50,50,50);
    fill(0,255,0);
    rect(175,50,50,50);
    fill(205,105,180);
    rect(250,50,50,50);
    if(secret > 0){
        fill(255,0,0);
        rect(340,50,50,50);
    }
    if(Score >= 5000){
        secret = 1;
    }
    if(Score >= 10000){
        secret = 2;
    }
    if(secret > 1){
        fill(255,215,0);
        rect(415,50,50,50);
    }
    
    
    fill(0,0,255);
    rect(583,330,200,100);
    fill(255,255,255);
    textSize(30);
    text("Reset?",633,383);
    textSize(75);
    if(Score >= highscore){
         fill(255,215,0);
         text("New Highscore!",40,500);
         highscore = Score;}
    else{
        fill(255,0,0);
        text(failure[failurecounter],40,500);}
    fill(255,215,0);
    textSize(100);
    text(highscore,50,630);
    }
}
var keyPressed = function(){
    var y = 0;
    if(CharY == 430){
    while(y < 100){
    CharY -= 2;
    fill(0,0,255);
    ellipse(CharX,CharY,100,100);
    fill(0,0,0);
    rect(0,480,1560,10);
    background(255,255,255);
    y += 1;}
        
    }
    
}
var mousePressed = function(){
    
    if(lives == 0){
    if(mouseX > 583 && mouseX < 783 && mouseY > 330 && mouseY < 430){
        CharY = 430;
        obstacles = [1560];
        lives = 1;
        Score = 0;
        difficulty = 10;
        counter = 0;
        dcounter = 0;
        c = 0;
        failurecounter += 1;
        if(failurecounter > 5){failurecounter = 0;}
    }
    if(mouseX > 100 && mouseX < 150 && mouseY > 50 && mouseY < 100){
        c1 = 0; 
        c2 = 0; 
        c3 = 255;
    }
    if(mouseX > 175 && mouseX < 225 && mouseY > 50 && mouseY < 100){
        c1 = 0; 
        c2 = 255; 
        c3 = 0;
    }
    if(mouseX > 250 && mouseX < 300 && mouseY > 50 && mouseY < 100){
        c1 = 255; 
        c2 = 105; 
        c3 = 180;
    }
    if(secret > 0){
    if(mouseX > 325 && mouseX < 375 && mouseY > 50 && mouseY < 100){
        c1 = 255;
        c2 = 0;
        c3 = 0;
    }}
    if(secret > 1){
    if(mouseX > 400 && mouseX < 450 && mouseY > 50 && mouseY < 100){
        c1 = 255;
        c2 = 215;
        c3 = 0;
    }
    if(mouseX > 25 && mouseX < 75 && mouseY > 50 && mouseY < 100){
        c1 = 0;
        c2 = 0;
        c3 = 0;
    }
        
    }
    }
}