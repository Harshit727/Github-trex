var trex,ground,treximage,groundimage,cloudimage,obstacle1image,obstacle2image,obstacle3image,obstacle4image,obsctacle5image,obstacle6image

function preload() {
  treximage = loadAnimation("trex1.png","trex3.png","trex4.png")
 groundimage =  loadImage("ground2.png")
  cloudimage = loadImage("cloud.png")
  obstacle1image = loadImage("obstacle1.png")
  obstacle2image = loadImage("obstacle2.png")
  obstacle3image = loadImage("obstacle3.png")
  obstacle4image = loadImage("obstacle4.png")
  obsctacle5image = loadImage("obstacle5.png")
  obstacle6image = loadImage("obstacle6.png")
}



function setup() {
  createCanvas(400, 400);
  
  ground = createSprite(200,384,400,10);
  ground.addImage("ground",groundimage)
  trex = createSprite(20,359,20,50);
  trex.addAnimation("trex",treximage)

  
trex.scale = 0.5;
}

function draw() {
  background(0);
  
  // Make T-rex jump
  if (keyDown("space")&& trex.y >= 354) {
      trex.velocityY = -12 ;
  }
  // add Gravity
  trex.velocityY = trex.velocityY + 0.8;
  
  trex.collide(ground);
 
  
  ground.velocityX = -2;
  ground.velocityY = 0;
  
  if (ground.x <0) {
    ground.x = 200
  }
  
  spawnClouds();
  spawnObstacles();
  
drawSprites();
}


function spawnClouds() {
  //write code here to spawn the clouds
  if (World.frameCount % 60 === 0) {
    var cloud = createSprite(400,320,40,10);
    cloud.y = random(280,320);
    cloud.addImage("cloud",cloudimage)
    cloud.scale = 0.5;
    cloud.velocityX = -3;
    
    cloud.lifetime = 134;
    
    cloud.depth = trex.depth;
    trex.depth = trex.depth + 1;
    
  }
}

function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(400,365,10,40);
    obstacle.velocityX = -6;
    
    //generate random obstacles
    var rand = Math.round(random(1,6));
      
    switch(rand){
case 1 : obstacle.addImage("obstacle1",obstacle1image)
        break;
        
case 2 : obstacle.addImage("obstacle2",obstacle2image)
       break;
        
case 3 : obstacle.addImage("obstacle3",obstacle3image)
        break;
        
case 4 : obstacle.addImage("obstacle4",obstacle4image)
        break;
        
case 5 : obstacle.addImage("obstacle5",obsctacle5image)
        break;
        
case 6 : obstacle.addImage("obstacle6",obstacle6image)
        break;
    }
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
   obstacle.lifetime = 70;
 
  console.log(rand);
  }
}
