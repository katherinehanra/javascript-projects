// Write a function makeLine(size) that returns a line with exactly size hashes.
function makeLine(size) {
  let line = "";
  for (let i = 0; i < size; i++) {
    line += "#";
  }
  return line;
}

// Write a function called makeSquare(size) that returns a size by size string of hashes.
function makeSquare(size) {
  return Array(size).fill(makeLine(size)).join("\n");
}

// Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.
function makeRectangle(width, height) {
  let rectangle = "";
  for (let i = 0; i < height; i++) {
    rectangle += makeLine(width) + "\n";
  }
  return rectangle.slice(0, -1);
}

console.log(makeRectangle(4, 8));

// Write a function makeDownwardStairs(height) that prints the staircase pattern shown below, with the given height. Use your makeLine function to do this.
function makeDownwardStairs(height) {
  let stairs = "";
  for (let i = 0; i < height; i++) {
    stairs += makeLine(i + 1) + "\n";
  }
  return stairs.slice(0, -1);
}

// Write a function makeIsoscelesTriangle(height) that returns a triangle of the given height.
function makeIsoscelesTriangle(height) {
  let triangle = "";
  for (let i = 0; i < height; i++) {
    triangle += makeSpaceLine(height - i - 1, 2 * i + 1) + "\n";
  }
  return triangle.slice(0, -1);
}
