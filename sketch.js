var movingRec
var fixedRec


function setup() {
  createCanvas(400,400);
 fixedRec=createSprite(200, 200, 50, 50);
 fixedRec.shapeColor="white"
 movingRec=createSprite(250, 100, 50, 50);
 movingRec.shapeColor="blue"

}

function draw() {
  background(0);  
movingRec.x=mouseX

movingRec.y=mouseY

if(movingRec.x-fixedRec.x<=fixedRec.width/2+movingRec.width/2
  && fixedRec.x-movingRec.x<=fixedRec.width/2+movingRec.width/2
  && movingRec.y-fixedRec.y<=fixedRec.height/2+movingRec.height/2
  && fixedRec.y-movingRec.y<=fixedRec.height/2+movingRec.height/2
  )
{
fixedRec.shapeColor="yellow"
movingRec.shapeColor="white"
}
else{
  fixedRec.shapeColor="white"
  movingRec.shapeColor="blue"
}

console.log(fixedRec.width/2+movingRec.width/2)
console.log(movingRec.x-fixedRec.x)
  drawSprites();
}