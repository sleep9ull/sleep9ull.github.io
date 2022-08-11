class Rectangle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.side = 7;
    this.color = color;
    this.growing = true;
  }

  grow() {
    if (this.growing) {
      this.side += 0.5;
    }
  }

  show() {
    strokeWeight(0.5);
    fill(this.color);
    rectMode(CENTER);
    rect(this.x, this.y, this.side, this.side);
  }

  edges() {
    return (
      this.x + this.side / 2 > width ||
      this.x - this.side / 2 < 0 ||
      this.y + this.side / 2 > height ||
      this.y - this.side / 2 < 0
    );
  }
}
