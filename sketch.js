var x;
var y = 400;
var w = 5;
var h;
var angle = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {
  background(240);
  rectMode(CENTER);
  for (i = 0; i < 3; i++) {
    for (j = 1; j < 12; j++) {
      x = j * 30 + i * 10 + 200;
      h = map(sin(angle + j * 0.2 + i * 1.2), -1, 1, -350, 350);
      if (h < 0) {
        fill(23, 27, 33);
        noStroke();
        h = abs(h);
        rect(x, y, w, h);
        angle += 0.0006;
      } else {
        fill(108, 208, 100);
        noStroke();
        rect(x, y, w, h);
        angle += 0.0006;
      }
    }
  }
}


var colors = ['rgb(23, 27, 33)', 'rgb(31, 67, 43)', 'rgb(46, 107, 56)', 'rgb(82, 164, 78)', 'rgb(108, 208, 100)']