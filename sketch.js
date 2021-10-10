function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  background("#caf0f8");
}

function draw() {
  noFill();

  let myColor = lerpColor(color("#03045E"), color("#CAF0F8"), frameCount / 120);

  stroke(myColor);
  translate(0, frameCount * 3);
  circle(-200, 100, 150);
  circle(100, 100, 150);
  circle(400, 100, 150);
  circle(700, 100, 150);
  circle(1000, 100, 150);
  circle(1300, 100, 150);
  circle(1600, 100, 150);

  translate(0, -frameCount * 6);
  circle(250, 600, 150);
  circle(550, 600, 150);
  circle(850, 600, 150);
  circle(1150, 600, 150);
  circle(1450, 600, 150);
  circle(1750, 600, 150);
  circle(2050, 600, 150);

  if (frameCount > 120) {
    noLoop();
  }
}
