var fixedrect,movingrect;
var rect1,rect2;
var rect4,rect5;
function setup() {
  createCanvas(800,400);
 movingrect=createSprite(400, 200, 50, 50);
 movingrect.shapeColor="pink";
 fixedrect=createSprite(200, 200, 50, 50);
 fixedrect.shapeColor="pink";
 rect1=createSprite(100,100,50,50);
 rect1.velocityX=6;
 rect1.shapeColor="red"
 rect2=createSprite(700,100,50,50);
 rect2.velocityX=-6;
 rect4=createSprite(300,300,50,50);
 rect4.shapeColor="blue"
rect5=createSprite(500,300,50,50);
rect5.shapeColor="purple"
}

function draw() {
  background("yellow");  
  rect4.x=World.mouseX;
  rect4.y=World.mouseY;
if(  isTouching(rect4,rect5)){
  rect4.shapeColor="green";
    rect5.shapeColor="green"
}
else{
  rect4.shapeColor="pink";
  rect5.shapeColor="pink";
}
 bounceOff(rect1,rect2)
  drawSprites();
}
