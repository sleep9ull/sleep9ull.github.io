let noiseMax = 1.5;
let zoff = 0;

function setup() {
  let cnv = createCanvas(400, 400);
  cnv.parent('sketch');
}

function draw() {
  background(250);
  translate(width / 2, height / 2);
  stroke(200);
  strokeWeight(0.4);

  for (let b = 0; b < TWO_PI; b += TWO_PI / 12) {

    beginShape();
    for (let a = 0; a < TWO_PI; a += 0.01) {
      let color = map(b, 0, 10, 0, 255);
      fill(255, 255, color, 8);
      let xoff = map(cos(a + b), -1, 1, 0, noiseMax);
      let yoff = map(sin(a + b), -1, 1, 0, noiseMax);
      let r = map(noise(xoff, yoff, zoff), 0, 1, 80, 200);
      let x = r * cos(a);
      let y = r * sin(a);
      vertex(x, y);
    }
    endShape(CLOSE);

  }
  // phase += 0.1;
  zoff += 0.02;

}