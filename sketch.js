var canvas;
var music;
var rect1,rect2,rect3,rect4,rect5,rect6,rect7;
var box;
//var edges;

function preload(){
    //music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,800);



    //create 4 different surfaces
    //rect1
    rect1 = createSprite(100, 100, 80, 20);
    rect1.shapeColor = "green";  
    rect1.debug = true;
    //rect2
    rect2=createSprite(100, 700, 80, 20);
    rect2.shapeColor="green";
    rect2.debug = true;
    //rect3
    rect3=createSprite(400,200,80,20);
    rect3.shapeColor="pink";
    rect3.debug = true;
    //rect4
    rect4=createSprite(700,200,80,20);
    rect4.shapeColor="yellow";
    rect4.debug = true;
    //rect5
     rect5=createSprite(400,600,80,20);
     rect5.shapeColor="pink";
     rect5.debug = true;
    //rect6
    rect6=createSprite(700,700,80,20);
    rect6.shapeColor="yellow";
    rect6.debug = true;
    //rect7
    rect7=createSprite(400,400,80,20);
    rect7.shapeColor="purple";
    rect7.debug = true;
    


    //create box sprite and give velocity
    //bouncing box
    box=createSprite(random(20,750));
    box.shapeColor="white";
    box.velocityY=5;
    box.velocityX=5;
    box.scale=0.3;


}

function draw() {
    background(rgb(169,169,169));

    //createEdgeSprites();
    //box.bounceOff(edges);
   


    

    //bouncing box from rects
    if(rect1.isTouching(box)&&box.bounceOff(rect1)){
      box.bounceOff(rect1)
    }
    if(rect2.isTouching(box)&&box.bounceOff(rect2)){
      box.bounceOff(rect2)
    }
    if(rect3.isTouching(box)&&box.bounceOff(rect3)){
      box.bounceOff(rect3)
    }
    if(rect4.isTouching(box)&&box.bounceOff(rect4)){
      box.bounceOff(rect4)
    } 
    if(rect5.isTouching(box)&&box.bounceOff(rect5)){
      box.bounceOff(rect5)
    }
    if(rect6.isTouching(box)&&box.bounceOff(rect6)){
      box.bounceOff(rect6)
    }
    if(rect7.isTouching(box)&&box.bounceOff(rect7)){
      box.bounceOff(rect7)
    }



    //add condition to check if box touching surface and make it  if(isTouching(movingRect,gameObj1)){
    if(isTouching(box,rect1)){
      box.shapeColor = "green";
    }
    else if (isTouching(box,rect2)) {
      box.shapeColor="green";

    }
    else if (isTouching(box,rect3)) {
      box.shapeColor="pink";

    }
    else if (isTouching(box,rect4)) {
      box.shapeColor="yellow";

    }
    else if (isTouching(box,rect5)) {
      box.shapeColor="pink";

    }
    else if (isTouching(box,rect6)) {
      box.shapeColor="yellow";

    }
    else if (isTouching(box,rect7)) {
      box.shapeColor="purple";

    }
    
    
    
    else { 
       box.shapeColor = "white";
      }

   
    drawSprites();
}
function isTouching(box,rect1){
    if (box.x - rect1.x < rect1.width/2 + box.width/2
      && rect1.x - box.x < rect1.width/2 + box.width/2
      && box.y - rect1.y < rect1.height/2 + box.height/2
      && rect1.y - box.y < rect1.height/2 + box.height/2) {
    
    return true;
      }
    
    else {
        return false;
       }
    }