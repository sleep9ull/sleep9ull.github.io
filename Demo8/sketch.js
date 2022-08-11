var circles = [];
var spots = [];
var img;

function preload() {
  img = loadImage("assets/2017.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);

  var density = displayDensity();
  pixelDensity(1);
  img.loadPixels();

  for (let x = 0; x < img.width; x++) {
    for (let y = 0; y < img.height; y++) {
      var index = x + y * img.width;
      var c = img.pixels[index * 4];
      var b = brightness([c]);
      if (b > 1) {
        spots.push(createVector(x, y));
      }
    }
  }

  console.log(img.width);
  console.log(img.height);
  console.log("pixels", img.pixels.length);
  console.log("spots", spots.length);
  console.log(density);
}

function draw() {
  background(0);
  frameRate(120);

  var total = 30;
  var count = 0;
  var attempts = 0;

  while (count < total) {
    var newC = newCircle();
    if (newC !== null) {
      circles.push(newC);
      count++;
    }
    attempts++;
    if (attempts > 1000) {
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
            var d = dist(circle.x, circle.y, other.x, other.y);
            var distance = circle.r + other.r;

            if (d - 5 < distance) {
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
  var r = int(random(0, spots.length));
  var spot = spots[r];
  var x = spot.x;
  var y = spot.y;

  var valid = true;
  for (circle of circles) {
    var d = dist(x, y, circle.x, circle.y);
    if (d < circle.r) {
      valid = false;
      break;
    }
  }

  if (valid) {
    return new Circle(x, y);
  } else {
    return null;
  }
}
