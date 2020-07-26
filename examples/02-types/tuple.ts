const tuplePerson: {
  name: string;
  age: number;
  hobbies: string[];
  role: [number, string];
} = {
  name: "Malanius",
  age: 30,
  hobbies: ["programming", "moutain biking"],
  role: [2, "author"],
};

tuplePerson.role.push("admin"); //still posible to push
tuplePerson.role[1] = 10; //Error: Type '10' is not assignable to type 'string'.

console.log(tuplePerson.hobbies);
