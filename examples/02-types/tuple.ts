const tuplePerson = {
  name: "Malanius",
  age: 30,
  hobbies: ["programming", "moutain biking"],
  role: [2, 'author'] //infered as (string | number)[]
};

// This is valid in infered type
tuplePerson.role.push('admin');
tuplePerson.role[1] = 10;

console.log(tuplePerson.hobbies);
