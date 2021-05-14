let circles = [];
let squares = [];

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);

  for (let i = 0; i < circles.length; i++) {
    circles[i].move();
    circles[i].show();
  }

  for (let i = 0; i < squares.length; i++) {
    squares[i].move();
    squares[i].show();
  }
}

function mousePressed() {
  let r = random(10, 50);
  let rs = random(5, 10);
  let c = new Circle(mouseX, mouseY, r);
  circles.push(c);
  let s = new Square(mouseX, mouseY, rs);
  squares.push(s);
}
function mouseDragged() {
  let r = random(10, 50);
  let rs = random(5, 10);
  let c = new Circle(mouseX, mouseY, r);
  circles.push(c);
  let s = new Square(mouseX, mouseY, rs);
  squares.push(s);
}

class Circle {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show() {
    fill(0);
    ellipse(this.x, this.y, this.r * 2);
  }
  move() {
    this.x = this.x + random(-2, 2);
    this.y = this.y + random(-2, 2);
  }
}

class Square {
  constructor(x, y, r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  show() {
    fill(167);
    rect(this.x, this.y, this.r * 3);
  }
  move() {
    this.x = this.x + random(-3, 3);
    this.y = this.y + random(-3, 3);
  }
}
