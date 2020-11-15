var car ,wall;
var weight,speed;

function setup() {
  speed=random(55,90);
  weight=random (400,1500);
  wall=createSprite(1500, 200, 60, height/2);
  car=createSprite(100,200, 50, 50);
  car.velocityX=speed;
}

function draw() {
  createCanvas(1600,400);
  background(25,25,25);  
  if(isTouching(car,wall)){
    car.velocityX=0;
    var deformation=0.5*weight*speed*speed/22500;
    if(deformation > 180){
      car.shapeColor=color(255,0,0)
    }
    if(deformation < 180 && deformation > 100 ){
      car.shapeColor=color(230,230,0)
    }
    if(deformation < 100){
      car.shapeColor=color(0,255,0)
    }
  }
  drawSprites();
}

function isTouching(object1,object2){
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
    return true;
  }
  
else {
  return false;
}
}