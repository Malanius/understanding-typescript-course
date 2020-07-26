const betterPerson = {
  name: "Malanius",
  age: 30,
  hobbies: ["programming", "moutain biking"],
};

let favoriteActivities: string[];
favoriteActivities = ["String"];

console.log(betterPerson.hobbies);

for (const hobby of betterPerson.hobbies) {
  console.log(hobby.toUpperCase());
  //console.log(hobby.map()); // ERROR: console.log(hobby.toUpperCase());
}
