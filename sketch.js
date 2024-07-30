var distMouse = 15;
var size = 10;
var offset = 4;

var wSize = window.innerWidth;
var hSize = 700;
var cols;
var rows;
var blocks = [];

function setup() {
  createCanvas(wSize, 500);
  rectMode(CENTER);
  angleMode(DEGREES);

  cols = width / size;
  rows = height / size;

  for (let i = 0; i < cols; i++) {
    blocks[i] = [];
    for (let j = 0; j < rows; j++) {
      blocks[i][j] = new Block(size / 2 + i * size, size / 2 + j * size);
    }
  }
}

function draw() {
  background(0);

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      blocks[i][j].move();
      blocks[i][j].display();
    }
  }
}

window.addEventListener("resize", resizeWindow);

function resizeWindow() {
  if (hSize > 700) {
    hSize = 700;
  } else {
    hSize = window.innerHeight;
  }
}
