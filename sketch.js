<<<<<<< HEAD
var inc = 0.1;
var scl = 10;
var cols, rows;
var fr;

var particles = [];

var flowfield;

var zoff = 0;

function setup() {
  createCanvas(800, 800);
  // colorMode(HSB, 255);
  background(255)

  cols = floor(width / scl);
  rows = floor(height / scl);
  fr = createP('');

  flowfield = new Array(cols * rows);

  for (let i = 0; i < 300; i++) {
    particles[i] = new Particle();
  }
=======
var x;
var y = 400;
var w = 5;
var h;
var angle = 0;

function setup() {
  createCanvas(800, 800);
>>>>>>> 2800b1aa2c9518c4d3cf44438076d162eeb40980
}


function draw() {
<<<<<<< HEAD
  var yoff = 0;
  for (var y = 0; y < rows; y++) {
    var xoff = 0;
    for (var x = 0; x < cols; x++) {
      var index = x + y * cols;
      var angle = noise(xoff, yoff, zoff) * TWO_PI * 2;
      var v = p5.Vector.fromAngle(angle);
      v.setMag(0.7);
      flowfield[index] = v;
      xoff += inc;
      // stroke(0, 80);
      // push();
      // translate(x * scl, y * scl);
      // rotate(v.heading());
      // strokeWeight(1);
      // line(0, 0, scl, 0);
      // pop();
=======
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
>>>>>>> 2800b1aa2c9518c4d3cf44438076d162eeb40980
    }
    yoff += inc;
    zoff += 0.0002;
  }
<<<<<<< HEAD

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  fr.html(floor(frameRate()));
}
=======
}


var colors = ['rgb(23, 27, 33)', 'rgb(31, 67, 43)', 'rgb(46, 107, 56)', 'rgb(82, 164, 78)', 'rgb(108, 208, 100)']
>>>>>>> 2800b1aa2c9518c4d3cf44438076d162eeb40980
