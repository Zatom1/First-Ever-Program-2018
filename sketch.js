//Made entirely By:Zee
/*******This is my first game after completing 86% of the intro to javascript
* I made this game in 3 hours
* I made this game without referencing other games
* if this game is similar to some that you have seen,know that all similarities have appeared purely by chance.
INSTRUCTIONS:
1.Wait for the title to disappear below the canvas then click anywhere on the canvas
2.Try to hit the correct shape with your ball(yes, it is designed to move weirdly)
3. ENJOY!!!!
********/
noStroke();
var eh = 20;//ONLY 4 VARIABLES
var ew = 20;
var y = 200;
var y2 = 30;
var rec = 40;
var L2x = 0;
var L2y = -400;
draw = function(){
    
background(0, 98, 255);

fill(255, 0, 0);
rect(0,y-4000,400,5000);
fill(0, 255, 26);
textSize(11.5);
if (mouseIsPressed && mouseY < 200){text("HOW TO PLAY : Move your mouse around and use your ball to hit the shapes",0,90);}
fill(0, 0, 0);
ellipse(200,y,250,50);
textSize(20);
fill(255, 0, 0);
if (mouseIsPressed && mouseY < 200){}//progress
text("The Ball Game V1", 120,y+ 7);
 if (mouseIsPressed && mouseY > 200 && y > 350 ){y +=-9999999999999999999999;}
    y += 0.5;
  if (y < 0){//Game Mechanics
  fill(0, 0, 0);
rect(10,y2+220,50,50);
if (eh < 300) {fill(8, 251, 255);ellipse(mouseY*1.5+25-17,mouseX*1.7-15+3,eh,ew);//ball
fill(0, 0, 0);
textSize(21);
text("Hit the correct shape with the ball ", y2,200);
fill(255, 0, 0);
text("(The ball is designed to move weirdly)",y2,225);
fill(0, 0, 0);
rect(270,y2,rec,rec-20);//shapes
ellipse(200,y2 + 270,60,60);
rect(50,y2,15,45,45);
rect(20,y2+300,60,30,25);
rect(300,y2+70,50,50);
triangle(200,y2+10,230,y2-20,240,70);//shapes
textSize(80);
if(mouseX*1.7 < 60 && mouseY*1.5 < 300 && mouseY*1.5 > 250 && mouseX*1.7 >10){
    
    background(0, 255, 4);
    fill(0, 77, 255);
rec +=200;
    //win message
    y2 += 9999999;
    textSize(80);
    text("You Win!!", 20, 250);
    
   //Game Mechanics
   background(0, 255, 26);
text("You Win!!",20,250);
}

}}
  };//NO LOOPS
