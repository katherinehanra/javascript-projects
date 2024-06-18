// #1 - Declare and initialize the variables for exercise 1 here:
let engineIndicatorLight = "red blinking";
let spaceSuitsOn = true;
let shuttleCabinReady = true;
let crewStatus = spaceSuitsOn && shuttleCabinReady;
let computerStatusCode = 200;
let shuttleSpeed = 15000;
let fuelLevel = 18000;
let engineTemperature = 2500;

// #2 - BEFORE running the code, predict what will be printed to the console by the following statements:
// My Prediction: The console will print the message, "engines are off".
if (engineIndicatorLight === "green") {
  console.log("engines have started");
} else if (engineIndicatorLight === "green blinking") {
  console.log("engines are preparing to start");
} else {
  console.log("engines are off");
}

/* #3 - Write conditional expressions to satisfy the safety rules.
Use the variables defined above to satisfy the rules listed below.*/ 

// crewStatus - If the value is true, print “Crew Ready. Else print “Crew Not Ready”
if (crewStatus) {
  console.log("Crew Ready");
} else {
  console.log("Crew Not Ready");
}

/* computerStatusCode - 
If the value is 200, print “Please stand by. Computer is rebooting.”
Else if the value is 400, print “Success! Computer online.”
Else print “ALERT: Computer offline!”*/
if (computerStatusCode === 200) {
  console.log("Please stand by. Computer is rebooting.");
} else if (computerStatusCode === 400) {
  console.log("Success! Computer online.");
} else {
  console.log("ALERT: Computer offline!");
}

/* shuttleSpeed -  
If the value is > 17500, print “ALERT: Escape velocity reached!”
Else if the value is < 8000, print “ALERT: Cannot maintain orbit!”
Else print “Stable speed”*/

if (shuttleSpeed > 17500) {
  console.log("ALERT: Escape velocity reached!");
} else if (shuttleSpeed < 8000) {
  console.log("ALERT: Cannot maintain orbit!");
} else {
  console.log("Stable speed.");
}

// #4 - PREDICTT: Do these code blocks produce the same result? Answer Yes or No.
// My Prediction: Yes

/*if (crewStatus && computerStatusCode === 200 && spaceSuitsOn) {
  console.log("all systems go");
} else {
  console.log("WARNING. Not ready");
}

if (!crewStatus || computerStatusCode !== 200 || !spaceSuitsOn) {
  console.log("WARNING. Not ready");
} else {
  console.log("all systems go");
}
*/

// #5 = Monitor the shuttle’s fuel status following the parameters listed in the textbook. 
if (
  fuelLevel < 1000 ||
  engineTemperature > 3500 ||
  engineIndicatorLight === "red blinking"
) {
  console.log("ENGINE FAILURE IMMINENT");
} else if (fuelLevel <= 5000 || engineTemperature > 2500) {
  console.log("Check fuel level. Engines running hot.");
} else if (fuelLevel > 20000 && engineTemperature <= 2500) {
  console.log("Full tank. Engines good.");
} else if (fuelLevel > 10000 && engineTemperature <= 2500) {
  console.log("Fuel level above 50%. Engines good.");
} else if (fuelLevel > 5000 && engineTemperature <= 2500) {
  console.log("Fuel level above 25%. Engines good.");
} else {
  console.log("Fuel and engine status pending...");
}

// #6a - Command Override for Shuttle Launch
let commandOverride = true || false;

if (commandOverride === false)

Create the variable commandOverride, and set it to be true or false.

If commandOverride is false, then the shuttle should only launch if the fuel and engine check are OK.

If commandOverride is true, then the shuttle will launch regardless of the fuel and engine status.



// #6b - Code the exercise if / else check listed in the textbook:

if (fuelLevel > 20000 && engineIndicatorLight !== "red blinking" || commandOverride); {
  console.log("Cleared to launch!")
} else {
  console.log("Launch scrubbed!");
}
