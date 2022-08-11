class Circle {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.r = 2;
    this.color = color;
    this.growing = true;
  }

  grow() {
    if (this.growing) {
      this.r += 0.3;
    }
  }

  show() {
    stroke(52);
    strokeWeight(0.3);
    fill(this.color);
    ellipse(this.x, this.y, this.r * 2, this.r * 2);
  }

  edges() {
    return (
      this.x + this.r > width ||
      this.x - this.r < 0 ||
      this.y + this.r > height ||
      this.y - this.r < 0
    );
  }
}
