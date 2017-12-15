var pg;
var x = 100,
  y = 100,
  angle1 = 0.0,
  segLength = 50;

function setup(){
  createCanvas(710, displayHeight);
  pg = createGraphics(400, 250);
  strokeWeight(20.0);
  stroke(255, 100);
}

function draw(){
// Entire Background
    background(0);

  dx = mouseX - x;
  dy = mouseY - y;
  angle1 = atan2(dy, dx);
//  The math to allow the second circle to follow the first
  x = mouseX - (cos(angle1) * segLength);
  y = mouseY - (sin(angle1) * segLength);

  segment(x, y, angle1);
  ellipse(x, y, 60, 60);
  fill(0, 12);
  rect(0, 0, width, height);
  fill(255);
  noStroke();
  ellipse(mouseX, mouseY, 20, 20);

// Beginging of the Graphics
  pg.background(1);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(mouseX-150, mouseY-75, 20, 20);
  pg.noFill();
  pg.stroke(255);
  pg.ellipse(x-150, y-75, 60, 60);

  //Draw the offscreen buffer to the screen with image()
  image(pg, 150, 75);
}



function segment(x, y, a) {
  push();
  translate(x, y);
  rotate(a);
  line(0, 0, segLength, 0);
  pop();
}