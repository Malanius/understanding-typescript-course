enum Role {
  ADMIN = 5, //5
  AUTHOR = 100, //100
  READ_ONLY = 200, //200
}

const enumPerson: {
  name: string;
  age: number;
  hobbies: string[];
  role: Role;
} = {
  name: "Malanius",
  age: 30,
  hobbies: ["programming", "moutain biking"],
  role: Role.ADMIN,
};

console.log(enumPerson.hobbies);
