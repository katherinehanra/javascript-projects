// Now consider both if/else blocks together (keeping the added console.log lines).
// Run the code and examine the output.

// Given the values for fuelLevel, crewStatus and computerStatus, should launchReady be true or false?
/* My Response: Though the condition for crewStatus and computerStatus has been met, the condition for fuelLevel has not. 
This resulted in launchReady being false. The second if/else block should be written to state that launchReady is false due to the fuelLevel 
even if the condition for crewStatus and computerStatus has been met */

/* Is the program behaving as expected?
My response: It is not behaving as it should if the intention is to have one launch ready status 
to where launchReady should only be true if both conditions are met for the fuelLevel, crewStatus, and computerStatus. */

let launchReady = false;
let fuelLevel = 17000;
let crewStatus = true;
let computerStatus = "green";

if (fuelLevel >= 20000) {
  console.log("Fuel level cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Insufficient fuel!");
  launchReady = false;
}

console.log("launchReady = ", launchReady);

if (crewStatus && computerStatus === "green") {
  console.log("Crew & computer cleared.");
  launchReady = true;
} else {
  console.log("WARNING: Crew or computer not ready!");
  launchReady = false;
}

console.log("launchReady = ", launchReady);

// if (launchReady) {
//    console.log('10, 9, 8, 7, 6, 5, 4, 3, 2, 1...');
//    console.log('Liftoff!');
// } else {
//    console.log('Launch scrubbed.');
// }
