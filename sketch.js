var blueBag,blueBagImg, greenBag,greenBagImg, yellowBag,yellowBagImg;

var background,backgroundImg;

var fish,fishImg;

var fishjumpImg;

var people1Img,people2Img,people3Img, people4Img, people5Img;

var plasticBottle1,plasticBottle1Img, plasticBottle2,plasticBottle2Img, plasticBottle3,plasticBottle3Img;

var water, waterImg;

var bg,bgImg;

var invGround;

var startingX;

function preload() {

  bgImg = loadImage ("images/Back Ground.png");
  
  fishImg = loadAnimation ("images/fish1.png","images/fish2.png","images/fish3.png","images/fish4.png")

  fishjumpImg = loadAnimation ("images/jump1.png", "images/jump2.png", "images/jump3.png", "images/jump4.png" ,"images/jump5.png","images/jump6.png","images/jump7.png","images/jump8.png","images/jump9.png","images/jump10.png" )

  plasticBottle1 = loadImage ("images/plastic bottle1.png");
  plasticBottle2 = loadImage ("images/plastic bottle2.png");
  plasticBottle3 = loadImage ("images/plastic bottle3.png");

  blueBag = loadImage ("images/bag blue.png");
  yellowBag = loadImage ("images/bag yellow.png");
  greenBag = loadImage ("images/bag green.png");

  

}


function setup() {

  createCanvas(windowWidth,windowHeight);

  fish = createSprite (0,height-50);
  fish.addAnimation ("fish",fishImg);

  fish.addAnimation ("fishJump",fishjumpImg); 

  invGround = createSprite (width*5/2,height-35,width*8,10);
  invGround.visible = false;

  plasticGroup = createGroup ();
 
}

function draw() {
  background(255,255,255);  

  image (bgImg,-width/2,0,width*7,height);
  startingX = fish.x + 350;
  spawnPlastic ();

   if (keyDown ("space") && fish.collide(invGround)) {

        fish.velocityY = -9;
        fish.changeAnimation ("fishJump");

 }  

if (keyWentUp ("space")) {

        fish.changeAnimation ("fish");
}

 if (keyDown ("right")) {

        fish.x = fish.x+6;

 }

 fish.velocityY = fish.velocityY +0.5;

 fish.collide (invGround);

 camera.position.x = fish.x;
 camera.position.y = height/2;


  drawSprites();
}

function spawnPlastic () {


 if (frameCount % 60 === 0) {

        var plastic=createSprite (startingX,height-175);
        plastic.scale=0.25;

        var rand = Math.round(random(1,6));
        switch(rand) {
        case 1: plastic.addImage(plasticBottle1);
                break;
        case 2: plastic.addImage(plasticBottle2);
                break;
        case 3: plastic.addImage(plasticBottle3);
                break;
        case 4: plastic .addImage(blueBag);
                break;  
        case 5: plastic .addImage(yellowBag);
                break;  
        case 6: plastic .addImage(greenBag);
                break;        

        }

        plastic.velocityY= +2;
        plastic.lifetime= 300;
        

        plasticGroup.add (plastic);

    }
}
