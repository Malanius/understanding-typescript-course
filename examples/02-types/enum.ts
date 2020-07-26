enum Role {
  ADMIN, //0
  AUTHOR, //1
  READ_ONLY, //2
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
