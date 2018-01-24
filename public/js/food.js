class Food {
  constructor() {
    this.x = floor(random(0, (width - scl) / scl)) * scl;
    this.y = floor(random(0, (height - scl) / scl)) * scl;
  }

  update(){
    // debugger;
    if (dist(this.x, this.y, snake.x, snake.y) < 1){
      snake.eat();
      this.getNewLocation();
    }
  }

  getNewLocation(){
    this.x = floor(random(0, (width - scl) / scl)) * scl;
    this.y = floor(random(0, (height - scl) / scl)) * scl;
  }

  show(){
    fill(150, 0, 0);
    rect(this.x, this.y, scl, scl);
  }
}
