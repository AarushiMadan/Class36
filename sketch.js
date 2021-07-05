var database;
var gameState=0;
var playerCount;
var form,player,game


function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(500,500);

  var hypnoticBallPosition = database.ref('ball/position');
  hypnoticBallPosition.on("value", readPosition, showError);
}

function draw(){
  background("white");
  
    drawSprites();
  
}

