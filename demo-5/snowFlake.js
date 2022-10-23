function getRandomSize() {
  let r = pow(random(0.01, 1), 4);
  return constrain(r * 24, 2, 24);
}

class Snowflake {
  constructor(sx, sy, img) {
    let x = sx || random(width);
    let y = sy || random(height + 100, height + 10);
    this.img = img;
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.angle = random(TWO_PI);
    this.xOff = 0;
    this.dir = random(1) > 0.5 ? 1 : -1;
    this.r = getRandomSize();
  }

  applyForce(force) {
    // Parallax Effect Hack
    let f = force.copy();
    f.mult(this.r);
    this.acc.add(f);
  }

  randomize() {
    let x = random(width);
    let y = random(height + 100, height + 10);
    this.pos = createVector(x, y);
    this.vel = createVector(0, 0);
    this.acc = createVector();
    this.r = getRandomSize();
  }

  update() {
    this.xOff = sin(this.angle) * this.r;

    this.vel.add(this.acc);
    this.vel.limit(this.r * 0.2);

    if (this.vel.mag() < 1) {
      this.vel.normalize();
    }

    this.pos.add(this.vel);
    this.acc.mult(0);

    if (this.pos.y < this.r) {
      this.randomize();
    }

    // Wrapping Left and Right
    if (this.pos.x < -this.r) {
      this.pos.x = width + this.r;
    }
    if (this.pos.x > width + this.r) {
      this.pos.x = -this.r;
    }

    this.angle += (this.dir * this.vel.mag()) / 200;
  }

  render() {
    // stroke(255);
    // strokeWeight(this.r);
    // point(this.pos.x, this.pos.y);
    push();
    translate(this.pos.x + this.xOff, this.pos.y);
    rotate(this.angle);
    imageMode(CENTER);
    image(this.img, 0, 0, this.r, this.r);
    pop();
  }
}
