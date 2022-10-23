let cols, rows;
let scl = 20;
let terrain = [];
let move = 0;

function setup() {
  createCanvas(windowWidth, windowHeight, WEBGL);
  cols = windowWidth / scl;
  rows = windowHeight / scl;

  for (var x = 0; x < cols; x++) {
    terrain[x] = [];
    for (var y = 0; y < rows; y++) {
      terrain[x][y] = 0;
    }
  }
}

function draw() {
  move -= 0.02;
  let yoff = move;
  for (let y = 0; y < rows; y++) {
    let xoff = 0;
    for (let x = 0; x < cols; x++) {
      terrain[x][y] = map(noise(xoff, yoff), 0, 1, -100, 100);
      xoff += 0.1;
    }
    yoff += 0.1;
  }

  background(0);
  rotateX(PI / 3);
  fill(200, 100);
  strokeWeight(0.5);
  translate(-windowWidth / 2, -windowHeight / 2);

  for (var y = 0; y < rows - 1; y++) {
    beginShape(TRIANGLE_STRIP);
    for (var x = 0; x < cols; x++) {
      vertex(x * scl, y * scl, terrain[x][y]);
      vertex(x * scl, (y + 1) * scl, terrain[x][y + 1]);
    }
    endShape();
  }
}
