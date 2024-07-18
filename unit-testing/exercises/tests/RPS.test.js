const test = require("../RPS.js");

describe("Select Winning Player Test", function () {
  test("should return 'tie' if player 1 and player 2 pick 'rock'", function () {
    //let output = test.whoWon("rock", "rock");
    if (player1 === player2) expect(output).toBe("TIE!");
  });

  test("returns 'Player 2 wins!' if P1 = rock & P2 = paper", function () {
    let output = test.whoWon("rock", "paper");
    expect(output).toBe("Player 2 wins!");
  });

  test("returns 'Player 2 wins!' if P1 = paper & P2 = scissors", function () {
    let output = test.whoWon("paper", "scissors");
    expect(output).toBe("Player 2 wins!");
  });
});

console.log(test.whoWon(player1, player2));
