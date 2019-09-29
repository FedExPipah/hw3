var x = 200;
var y = 200;
var r = 10;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  colorMode(HSB);
  stroke(263, 23, 69, 30);

  //background(216,191,216);
  // noStroke();

  // draw smokestack
  //  fill(255);
  //rect(195, height, 30, -50);


  // draw puff of smoke
  // fades darker as it gets closer to 0
  fill(y);
  translate(x, y);
  rotate(r);
  rect(-5, -5, 20, 20);
  rect(0, 7, 10, 10);

  // up 3 pixels
  y -= 2;


  // rotate 0.05 radians, which is about 2.8 degrees
  r += 200

  // if reach past the top a bunch
  if (y < -100) {
    y = 400;
  }
}
