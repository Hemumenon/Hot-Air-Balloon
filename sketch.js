var bgImg;
var hotAirBalloon,hotAirBalloonImg;
var database,positions;

function preload(){
  hotAirBalloonImg=loadImage("hotairballoon1.png");
  bgImg=loadImage("cityImage.png");
}
function setup() {
  createCanvas(1350,600);
  database = firebase.database();

  hotAirBalloon = createSprite(400, 200, 50, 50);
  hotAirBalloon.addAnimation("ground",hotAirBalloonImg);
  hotAirBalloon.scale=0.5;

  var hotAirBalloonposition=database.ref('hotAirBalloon/height');
  hotAirBallonposition.on("value",showError)
}
  //readHeight
  function draw() {
    background(bgImg); 
    if(keyDown(LEFT_ARROW)){
      // changePosition(-1,0);
      hotAirBalloon.x = hotAirBalloon.x -10;
}
    else if(keyDown(RIGHT_ARROW)){
        // changePosition(1,0);
        hotAirBalloon.x = hotAirBalloon.x +10;
    }
    else if(keyDown(UP_ARROW)){

      hotAirBalloon.addAnimation("ground",hotAirBalloonImg);
      hotAirBalloon.scale=hotAirBalloon.scale -0.01;
      hotAirBalloon.y = hotAirBalloon.y -10;
    }
    else if(keyDown(DOWN_ARROW)){
        // changePosition(0,+1);
        hotAirBalloon.addAnimation("ground",hotAirBalloonImg);
        hotAirBalloon.scale=hotAirBalloon.scale +0.01;

        hotAirBalloon.y = hotAirBalloon.y +10;

    }
      drawSprites();
    }
    function updateHeight(x,y){
    database.ref('hotAirBalloon/height').set({
      'x' : height.x + x ,
      'y' : height.y + y
    })}

    function readHeight(data){
    height = data.val();
    hotAirBalloon.x = height.x;
    hotAirBalloon.y = height.y;
    }

    function showError(){
    console.log("error");
    }