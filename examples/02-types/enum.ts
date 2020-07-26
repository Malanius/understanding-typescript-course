enum Role {
  ADMIN = 5, //5
  AUTHOR, //6
  READ_ONLY, //7
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
