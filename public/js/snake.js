class Snake {
  constructor () {
    this.x = 0;
    this.y = 0;
    this.xspeed = 1;
    this.yspeed = 0;
    this.total = 0;
    this.tail = [];
  }

  update () {
    for(var i = 0; i < this.tail.length - 1; i++){
      this.tail[i] = this.tail[i+1];
    }
    this.tail[this.total - 1] = createVector(this.x, this.y);
    this.x += this.xspeed * scl;
    this.y += this.yspeed * scl;
    this.x = constrain(this.x, 0, width - scl);
    this.y = constrain(this.y, 0, height - scl);

    this.checkCollision();
  }

  eat(){
    this.total++;
    score += 10;
  }

  show () {
    fill(255);
    for(var i = 0; i < this.tail.length; i++){
      rect(this.tail[i].x, this.tail[i].y, scl, scl);
    }
    rect(this.x, this.y, scl, scl)
  }

  dir (xspeed, yspeed) {
    this.xspeed = xspeed;
    this.yspeed = yspeed;
  }

  checkCollision () {
    for (var i = 0; i < this.tail.length; i++) {
      if(dist(this.x, this.y, this.tail[i].x, this.tail[i].y) < 1){
        scores.push(score);
        localStorage.setItem('scores', scores);
        score = 0;
        this.total = 0;
        this.tail = [];
        alert("You Lose!")
      }
    }
  }
}
