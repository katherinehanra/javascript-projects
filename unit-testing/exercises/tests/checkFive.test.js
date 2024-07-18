const checkFive = require("../checkFive.js");

describe("checkFive", function () {
  test("should say num is less than 5 if num is less than 5", function () {
    let output = checkFive(4);
    expect(output).toBe("4 is less than 5.");
  });

  test("should say num is equal to 5 if num is equal to 5", function () {
    let output = checkFive(5);
    expect(output).toBe("5 is equal to 5.");
  });

  test("should say num is greater than 5 if num greater than 5", function () {
    let output = checkFive(6);
    expect(output).toBe("6 is greater than 5.");
  });
});
