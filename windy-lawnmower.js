function setup() {
  createCanvas(500, 400);
  colorMode(HSB);
}

var x = 0;
var h = 15;// original height 

function draw() {
  stroke(random(60, 70), 100, 90);
  line(x, height-10, x+random(10, 50), height-10-random(h));
 noStroke(); // if has stroke then it will have a little green squar on the background

  x = x + 10; // the spot of how whide the grass will grow

  if (x > width) {
    x = random(10);
    h = h + 5; // continue growing bc the if statement is T 
  }

  if (random(100) > 99.9) { 
    fill(255);
   rect(0, 0, width, height-15); //the lawnmower 
    h = 8; // will come at grass h=10
  }

  fill(40, 100, 60);
  rect(0, height-10, width, 10); // ground 
}
