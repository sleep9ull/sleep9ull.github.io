var x, y;
let walker;

function setup() {
  createCanvas(400, 400);
  walker = new Walker(200, 200);
  background(51);
}

function draw() {
  walker.update();
  walker.show();
}


class Walker {
  constructor(x, y) {
    this.pos = createVector(x, y);
    this.vel = createVector(1, 0);
  }

  update() {
    this.pos.add(this.vel);
    // this.pos.x = this.pos.x + this.vel.x;
    // this.pos.y = this.pos.y + this.vel.y;
  }

  show() {
    stroke(255);
    strokeWeight(2);
    point(this.pos.x, this.pos.y);
  }
}