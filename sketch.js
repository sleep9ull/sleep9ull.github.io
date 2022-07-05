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
}


function draw() {
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
    }
    yoff += inc;
    zoff += 0.0002;
  }

  for (let i = 0; i < particles.length; i++) {
    particles[i].follow(flowfield);
    particles[i].update();
    particles[i].edges();
    particles[i].show();
  }
  fr.html(floor(frameRate()));
}
