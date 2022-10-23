var x;
var y = 200;
var w = 5;
var h;
var angle = 0;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch');
}

function draw() {
  background(244);
  rectMode(CENTER);
  for (i = 0; i < 3; i++) {
    for (j = 1; j < 12; j++) {
      x = j * 30 + i * 10;
      h = map(sin(angle + j * 0.2 + i * 1.2), -1, 1, -350, 350);
      if (h < 0) {
        fill(180);
        noStroke();
        h = abs(h);
        rect(x, y, w, h);
        angle += 0.0006;
      } else {
        fill(82, 164, 78);
        noStroke();
        rect(x, y, w, h);
        angle += 0.0006
      }
    }
  }
}