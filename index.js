var gameHasStarted = false;
var userPattern = [];
var gamePattern = [];

$(document).keypress(function (){
  if( gameHasStarted == false ){
    gameStart();
    $("p").text("Your score: 0");
  }
})

function gameStart() {

  gameHasStarted = true;
  makeButtonsPlayable();
  var level = 0;
  $(".box").addClass("playable");
  $("p").removeClass("hidden");
  $("h1").text("Level " + (level+1));
  colorSequenceNext();

}

function makeButtonsPlayable() {
  $(".red").unbind().click( function() {
    userPattern.push("red");
    $(".red").fadeTo(200, 100);
    var audio = new Audio("sounds/red.wav");
    audio.play();
    $(".red").fadeTo(200, 0.3);
    checkAnswer(userPattern.length - 1);
  });
  $(".blue").unbind().click( function() {
    userPattern.push("blue");
    $(".blue").fadeTo(200, 100);
    var audio = new Audio("sounds/blue.wav");
    audio.play();
    $(".blue").fadeTo(200, 0.3);
    checkAnswer(userPattern.length - 1);
  });
  $(".green").unbind().click( function() {
    userPattern.push("green");
    $(".green").fadeTo(200, 100);
    var audio = new Audio("sounds/green.wav");
    audio.play();
    $(".green").fadeTo(200, 0.3);
    checkAnswer(userPattern.length - 1);
  });
  $(".yellow").unbind().click( function() {
    userPattern.push("yellow");
    $(".yellow").fadeTo(200, 100);
    var audio = new Audio("sounds/yellow.wav");
    audio.play();
    $(".yellow").fadeTo(200, 0.3);
    checkAnswer(userPattern.length - 1);
  });
}

function colorSequenceNext() {
  userPattern = [];
  var randomNumberHolder;
  var colors = ["red", "blue", "green", "yellow"];
  randomNumberHolder = Math.floor(Math.random() * 4);
  gamePattern.push(colors[randomNumberHolder]);
  $("." + gamePattern[gamePattern.length - 1]).fadeTo(200, 100);
  var audio = new Audio("sounds/" + gamePattern[gamePattern.length - 1] + ".wav");
  audio.play();
  $("." + gamePattern[gamePattern.length - 1]).fadeTo(200, 0.3);
}

function checkAnswer(currentLevel) {
  if( gamePattern[currentLevel] === userPattern[currentLevel] ){
    console.log("correct");
    if( gamePattern.length === userPattern.length ){
      setTimeout(function() {
        $("h1").text("Level " + (currentLevel+2));
        $("p").text("Your score: " + (100 * (currentLevel+1)));
        colorSequenceNext();
      }, 1000);
    }
  }
  else {
    $("body").attr("style", "background-color: #8a1919");
    setTimeout(function() {
      var gameOverAudio = new Audio("sounds/gameover.wav");
      gameOverAudio.play();
    }, 200);
    setTimeout(function() {
      gameOver();
      $("body").removeAttr("style");
    }, 200);
  }
}

function gameOver() {
  $("h1").text("Game Over, Press Any Key to Restart");
  gamePattern = [];
  gameHasStarted = false;
}
