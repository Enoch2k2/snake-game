var snake, food, scoreText, scoresTable, score, scores;
var scl = 20;


function setup(){
  createCanvas(600, 600);
  frameRate(10);
  snake = new Snake();
  food = new Food();
  score = 0;
  scores = localStorage.getItem('scores') ? localStorage.getItem('scores').split(",") : [];
  console.log(localStorage)
  scoreText = document.querySelector('h3');
  scoresTable = document.querySelector('table');
}

function sortScores(){
  scores = scores.sort((a, b) => b - a);
  if(scores.length >= 10){
    scores = scores.slice(0, 10);
  }
  return scores;
}

function draw(){
  background(51);
  snake.update();
  snake.show();
  food.update();
  food.show();
  scoreText.innerHTML = `Score: ${score}`
  scoresTable.innerHTML = "<td>Scores:</td>";
  for (var i = 0; i < sortScores().length; i++) {
    scoresTable.innerHTML += `<td><span style="color: blue;">${i + 1}</span>. <span style="color: red;">Score</span>: <span style="color: green;">${scores[i]}</span></td>`;
  }
}

function keyPressed() {
  if(keyCode === UP_ARROW){
    snake.dir(0, -1);
  } else if (keyCode === DOWN_ARROW) {
    snake.dir(0, 1);
  } else if (keyCode === RIGHT_ARROW) {
    snake.dir(1, 0);
  } else if (keyCode === LEFT_ARROW) {
    snake.dir(-1, 0);
  }
}
