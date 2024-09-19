let cols;
let rows;
let size = 5;
let grid = [];
let x;
let y;
let dx;
let dy;
let margin = 5;
let colors = [
  "#abcd5e",
  "#14976b",
  "#2b67af",
  "#62b6de",
  "#f589a3",
  "#ef562f",
  "#fc8405",
  "#f9d531"
];

function setup() {
  createCanvas(400, 400);

  angleMode(DEGREES);

  cols = width / size;
  rows = height / size;

  x = floor(random(cols / 2 - margin, cols / 2 + margin));
  y = floor(random(rows / 2 - margin, rows / 2 + margin));
   console.log(x, y)

  for (let i = 0; i < cols; i++) {
    grid[i] = [];
    for (let j = 0; j < rows; j++) {
      grid[i][j] = color(0, 0, 100);
    }
  }
}

function draw() {
  background(0);
  stroke(0);

  dx = random([-1, 1]);
  dy = random([-2, -1, 1, 2]);
 

  if (x + dx < 0 || x + dx > cols - 1) {
    dx = 0;
  }

  if (y + dy < 0 || y + dy > rows - 1) {
    dy = 0;
  }
  x += dx;
  y += dy;

  let cell1 = createVector(x, y);
  let cell2 = createVector(cols - 1 - x, y);
  let cell3 = createVector(x, rows - 1 - y);
  let cell4 = createVector(cols - 1 - x, rows - 1 - y);
  let c = random(colors);
  grid[cell1.x][cell1.y] = c;
  grid[cell2.x][cell2.y] = c;
  grid[cell3.x][cell3.y] = c;
  grid[cell4.x][cell4.y] = c;

  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      fill(grid[i][j]);
      rect(i * size, j * size, size, size);
    }
  }
}

function windowResized() {
  resizeCanvas(400, 400);
}
