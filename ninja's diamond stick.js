var x = 300;
var y = 300;
var r = 100;

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
  rect(0, 1, 30, 30);

  // up 3 pixels
  y -= 1;


  // rotate 0.05 radians, which is about 2.8 degrees
  r += 200

  // if reach past the top a bunch
  if (y < -100) {
    y = 400;
  }
}
