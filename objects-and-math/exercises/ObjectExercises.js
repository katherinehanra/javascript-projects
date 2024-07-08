let superChimpOne = {
  name: "Chad",
  species: "Chimpanzee",
  mass: 9,
  age: 6,
  astronautID: 1,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
  crewReports: function () {
    return (
      this.name +
      " is a " +
      this.species +
      "." +
      " They are " +
      this.age +
      " years old and " +
      this.mass +
      " kilograms. Their ID is " +
      this.astronautID +
      "."
    );
  },
};

let salamander = {
  name: "Lacey",
  species: "Axolotl Salamander",
  mass: 0.1,
  age: 5,
  astronautID: 3,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
  crewReports: function () {
    return (
      this.name +
      " is a " +
      this.species +
      "." +
      " They are " +
      this.age +
      " years old and " +
      this.mass +
      " kilograms. Their ID is " +
      this.astronautID +
      "."
    );
  },
};

let chimp = {
  name: "Brad",
  species: "Chimpanzee",
  mass: 11,
  age: 6,
  astronautID: 5,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
  crewReports: function () {
    return (
      this.name +
      " is a " +
      this.species +
      "." +
      " They are " +
      this.age +
      " years old and " +
      this.mass +
      " kilograms. Their ID is " +
      this.astronautID +
      "."
    );
  },
};

let dog = {
  name: "Leroy",
  species: "Beagle",
  mass: 14,
  age: 5,
  astronautID: 7,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
  crewReports: function () {
    return (
      this.name +
      " is a " +
      this.species +
      "." +
      " They are " +
      this.age +
      " years old and " +
      this.mass +
      " kilograms. Their ID is " +
      this.astronautID +
      "."
    );
  },
};

let tardy = {
  name: "Almina",
  species: "Tardigrade",
  mass: 0.0000000001,
  age: 1,
  astronautID: 10,
  move: function () {
    return Math.floor(Math.random() * 11);
  },
  crewReports: function () {
    return (
      this.name +
      " is a " +
      this.species +
      "." +
      " They are " +
      this.age +
      " years old and " +
      this.mass +
      " kilograms. Their ID is " +
      this.astronautID +
      "."
    );
  },
};

let crew = [superChimpOne, salamander, chimp, dog, tardy];

console.log(superChimpOne.crewReports());
console.log(salamander.crewReports());
console.log(chimp.crewReports());
console.log(dog.crewReports());
console.log(tardy.crewReports());

// After you have created the other object literals, add the astronautID property to each one.

// Add a move method to each animal object

// Create an array to hold the animal objects.

// Print out the relevant information about each animal.

// Start an animal race!
