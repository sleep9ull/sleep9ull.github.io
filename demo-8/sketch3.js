var circles = [];
var img;

function preload() {
  img = loadImage("assets/MonaLisa.jpg");
}

function setup() {
  const cnv = createCanvas(300, 450);
  cnv.parent("sketch");

  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels();

  console.log(img.width);
  console.log(img.height);
  console.log("pixels", img.pixels.length);
  console.log(density);
}

function draw() {
  background(255);
  // frameRate(30);

  var total = 24;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 100000) {
      noLoop();
      console.log("finished");
      break;
    }
  }

  for (circle of circles) {
    if (circle.growing) {
      if (circle.edges()) {
        circle.growing = false;
      } else {
        for (other of circles) {
          if (circle !== other) {
            let d = dist(circle.x, circle.y, other.x, other.y);
            let distance = circle.r + other.r;
            if (d - 1 < distance) {
              circle.growing = false;
              break;
            }
          }
        }
      }
    }

    circle.show();
    circle.grow();
  }
}

function newCircle() {
  var x = random(0, img.width);
  var y = random(0, img.height);

  var valid = true;
  for (circle of circles) {
    var d = dist(x, y, circle.x, circle.y);
    if (d - 1 < circle.r) {
      valid = false;
      break;
    }
  }

  if (valid) {
    let index = (int(x) + int(y) * img.width) * 4;
    var r = img.pixels[index];
    var g = img.pixels[index + 1];
    var b = img.pixels[index + 2];
    let c = color(`rgba(${r}, ${g}, ${b}, 0.9)`);
    return new Circle(x, y, c);
  } else {
    return null;
  }
}
