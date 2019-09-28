function setup() {
  createCanvas(600, 600);
  background(255);
}

// track the circle to draw next frame
var x = 20;
var y = 20;

function draw() {
 colorMode(HSB);
  stroke(263,23,69,30);

  // draw circle with random hue
  fill(random(310), 13, 78);
  //ellipse(x, y, 5);
  //rect(x, x, y ,y); // direction 
  rect(0, 0, 600 ,y);
  rect(x, y, 0 ,600);// lines

  // set up next circle
  x = x + 10;

  // if we hit the right edge, go down a line
  if (x > width-10) {
    x = 10;
    y = y + 10;
  }

  // if we hit the bottom edge, reset to top
  if (y > height-10) {
    y = 10;
  }
}
