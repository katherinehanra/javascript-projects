// Declare and assign the variables below
let shuttlename = "determination";
let shuttlespeedmph = 17500;
let kilometerstomars = 225000000;
let kilometerstomoon = 384400;
let milesperkilometer = 0.621;

// Use console.log to print the 'typeof' each variable. Print one item per line.
console.log(typeof shuttlename);
console.log(typeof shuttlespeedmph);
console.log(typeof kilometerstomars);
console.log(typeof kilometerstomoon);
console.log(typeof milesperkilometer);

// Calculate a space mission below
let milestomars = kilometerstomars * milesperkilometer;
let hourstomars = milestomars / shuttlespeedmph;
let daystomars = hourstomars / 24;

// Print the results of the space mission calculations below
console.log(shuttlename, "will take", daystomars, "days to reach Mars.");

// Calculate a trip to the moon below
let milestomoon = kilometerstomoon * milesperkilometer;
let hourstomoon = milestomoon / shuttlespeedmph;
let daystomoon = hourstomoon / 24;

// Print the results of the trip to the moon below
console.log(
  shuttlename + " will take " + daystomoon + "days to reach the Moon."
);

//Exercise completed.
