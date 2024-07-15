let arrTest = [2, 3, 6, 5, 9];

function randomFromArray(arr) {
  let i = Math.floor(Math.random() * arr.length);
  return arr[i];
}

console.log(randomFromArray(arrTest));

//TODO: Export the randomFromArray function.
module.exports = randomFromArray;
