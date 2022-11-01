var rectangles = []
var img

function preload() {
  img = loadImage("assets/MonaLisa.jpg")
}

function setup() {
  const cnv = createCanvas(300, 450)
  cnv.parent("sketch")

  var density = displayDensity()
  pixelDensity(1)
  img.loadPixels()

  console.log(img.width)
  console.log(img.height)
  console.log("pixels", img.pixels.length)
  console.log(density)
}

function draw() {
  background(255)
  // frameRate(30);

  var total = 20
  var count = 0
  var attempts = 0

  while (count < total) {
    var newS = newRectangle()
    if (newS !== null) {
      rectangles.push(newS)
      count++
    }
    attempts++
    if (attempts > 10000) {
      noLoop()
      console.log("finished")
      break
    }
  }

  for (rectangle of rectangles) {
    if (rectangle.growing) {
      if (rectangle.edges()) {
        rectangle.growing = false
      } else {
        for (other of rectangles) {
          if (rectangle !== other) {
            let dX = Math.abs(rectangle.x - other.x)
            let dY = Math.abs(rectangle.y - other.y)
            let distance = (rectangle.side + other.side) / 2

            if (dX - 2 < distance && dY - 2 < distance) {
              rectangle.growing = false
              // console.log("not growing -2");
              break
            }
          }
        }
      }
    }

    rectangle.show()
    rectangle.grow()
  }
}

function newRectangle() {
  let x = random(0, img.width)
  let y = random(0, img.height)

  let valid = true
  for (rectangle of rectangles) {
    let d = dist(x, y, rectangle.x, rectangle.y)
    if (d - 2 < rectangle.side / 2) {
      valid = false
      break
    }
  }

  if (valid) {
    let index = (int(x) + int(y) * img.width) * 4
    let r = img.pixels[index]
    let g = img.pixels[index + 1]
    let b = img.pixels[index + 2]
    let c = color(`rgba(${r}, ${g}, ${b}, 0.8)`)
    return new Rectangle(x, y, c)
  } else {
    return null
  }
}
