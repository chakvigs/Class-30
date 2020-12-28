class Pig extends BaseClass {
  constructor(x, y){
    super(x,y,50,50);
    this.visibility = 255;
    this.image = loadImage("sprites/enemy.png");
  }

  display() {
    if (this.body.speed < 3) {
      super.display();
    }
    else {
      World.remove(world, this.body);
      push();
      this.visibility = this.visibility - 5;
      tint(255, this.visibility);
      strokeWeight(4);
      image(this.image, this.body.position.x, this.body.position.y, {isStatic:true});
      pop();
    }
  }
}