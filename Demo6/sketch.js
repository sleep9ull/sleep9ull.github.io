let pi;
let digits = [];
let index = 0;
let diff = 2;
let r = 500;

function preload() {
  pi = loadStrings("pi1000000.txt");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(24);
  background(0);
  stroke(255);
  strokeWeight(0.5);
  noFill();
  translate(width / 2, height / 2);
  ellipse(0, 0, r, r);

  const piString = pi[0];
  const sdigits = piString.split("");
  digits = int(sdigits);

  // console.log(piString.length);
  // console.log(digits.length);
}

function draw() {
  translate(width / 2, height / 2);
  let digit = digits[index];
  let nextDigit = digits[index + 1];
  index++;

  let a1 = map(digit, 0, 10, 0, TWO_PI) + random(-diff, diff);
  let a2 = map(nextDigit, 0, 10, 0, TWO_PI) + random(-diff, diff);

  let x1 = (r / 2) * cos(a1);
  let y1 = (r / 2) * sin(a1);

  let x2 = (r / 2) * cos(a2);
  let y2 = (r / 2) * sin(a2);

  strokeWeight(0.5);
  stroke(random(72, 128), random(72, 128), random(72, 128));
  bezier(x1, y1, 0, 0, 0, 0, x2, y2);
}
