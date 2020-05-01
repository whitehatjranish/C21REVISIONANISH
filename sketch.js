var bullet,bullet1,bullet2,bullet3;
var wall;
var thickness,weight,speed;
var Damage,bulletWeight,bulletSpeed,Thicknessofwall;

function setup() {
  createCanvas(1600,400);
 bullet= createSprite(100, 200, 100, 10);
 bullet.velocityX=223;
bullet.shapeColor="white";

thickness=random(22,303);
speed=random(223,321);
weight=random(30,52);
wall=createSprite(1200,200,thickness,height/2);
wall.shapeColor="green";

}

function draw() {
  background("blue");  
  bullet.display();

  wall.display();
 
  if(bullet.collide(wall)){
    bullet.velocityX=0;
    Damage=0.5*bulletWeight*bulletSpeed/(Thicknessofwall*Thicknessofwall*Thicknessofwall);

  }
  if(Damage>10){

    wall.color(80,80,80);
  }

 if(Damage<10){

  wall.color(80,80,80);
 }
  drawSprites();
}
function hasCollided(bullet,wall)
{
      bulletRightEdge=bullet.sprite.x+bullet.sprite.width;
      wallLeftEdge=wall.sprite.x;
      if(bulletRightEdge>=wallLeftEdge)
      {
         return true
      }
      return false;
    }

















