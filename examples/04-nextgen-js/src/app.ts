// let & const

const constValue = "something";
// constValue = 'impossible';

let letValue;
letValue = "something";

// Var is global or function scope only!
var age = 24;
if (age > 20) {
  var oldYet = true;
}

// console.log(oldYet); //works in JS!

// let & const have local/block scope
// const ageC = 24;
// if (ageC > 20) {
//   let old = true;
// }

// console.log(old); // old is not defined

// Arrow functions
const add = (a: number, b: number = 1) => a + b;

const printOutput: (a: number | string) => void = (output) =>
  console.log(output);

const button = document.querySelector("button");
if (button) {
  button.addEventListener("click", (event) => console.log(event));
}

printOutput(add(5));

const hobbies = ["Music", "Games"];
const activeHobbies = ["Mountain biking", ...hobbies];

// activeHobbies.push(hobbies); //would push the array as new element of array
// activeHobbies.push(hobbies[0], hobbies[1]); //cumbersome
// activeHobbies.push(...hobbies); //spread operator pulls out all elements

const person = {
  name: "Larien",
  age: 25,
};

// const copiedPerson = person; //not real copy, just reference
const copiedPerson = { ...person };
