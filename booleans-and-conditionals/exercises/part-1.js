// #1 - Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;

// #2 - BEFORE running the code, predict what will be printed to the console by the following statements:
// My Prediction: The console will print the message, "engines are off".
if (engineIndicatorLight === "green") {
  console.log("Engines have started");
} else if (engineIndicatorLight === "green blinking") {
  console.log("Engines are preparing to start");
} else {
  console.log("Engines are off");
}
