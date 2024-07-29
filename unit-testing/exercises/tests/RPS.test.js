const whoWon = require("../RPS.js");

test("returns 'TIE!' if P1 & P2 choose the same option.", function () {
  let output = whoWon("tie", "tie");
  expect(output).toBe("TIE!");
});

describe("Select Winning Player Test", function () {
  test("should return 'tie' if player 1 and player 2 pick 'rock'", function () {
    let output = whoWon("rock", "rock");
    expect(output).toBe("TIE!");
  });

  test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
    let output = whoWon("rock", "paper");
    expect(output).toBe("Player 2 wins!");
  });

  test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
    let output = whoWon("paper", "scissors");
    expect(output).toBe("Player 2 wins!");
  });
});
