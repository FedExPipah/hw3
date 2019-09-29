var x = 300;
var y = 300;
var r = 100;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  stroke(255);

  fill(random(310), 13, 78);
  translate(x, y);
  rotate(r);
  rect(-5, -5, 20, 20);
  rect(0, 7, 10, 10);
  rect(0, 1, 30, 30);
  rect(10, 10, 5, 5)

  y -= 1;
  r += 200

  if (y < -100) {
    y = 400;
  }
}
