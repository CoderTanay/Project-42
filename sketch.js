var hr, mn, sc;
var hrAngle, mnAngle, scAngle

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);
}

function draw() {
  background(0); 
  
  translate(200, 200);
  rotate(-90);

  hr = hour();
  mn = minute();
  sc = second();

  scAngle = map(sc, 0, 60, 0, 360);
  mnAngle = map(mn, 0, 60, 0, 360);
  hrAngle = map(hr % 12, 0, 12, 0, 360);

  push();
  rotate(scAngle);
  stroke("red");
  strokeWeight(7);
  line(0, 0, 100, 0);
  pop();

  push();
  rotate(mnAngle);
  stroke("green");
  strokeWeight(7);
  line(0, 0, 75, 0);
  pop();

  push();
  rotate(hrAngle)
  stroke("blue");
  strokeWeight(7);
  line(0, 0, 50, 0);
  pop();

  push();
  stroke("red");
  strokeWeight(8);
  noFill();
  var arc1 = map(sc, 0, 60, 0, 360);
  arc(0, 0, 300, 300, 0, arc1);
  pop();

  push();
  stroke("green");
  strokeWeight(8);
  noFill();
  var arc2 = map(mn, 0, 60, 0, 360);
  arc(0, 0, 280, 280, 0, arc2);
  pop();

  push();
  stroke("blue");
  strokeWeight(8);
  noFill();
  var arc3 = map(hr % 12, 0, 12, 0, 360);
  arc(0, 0, 260, 260, 0, arc3);
  pop();
}