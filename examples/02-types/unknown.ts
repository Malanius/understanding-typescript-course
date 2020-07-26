let userInput: unknown;
let userName: string;

userInput = 5;
userInput = "String";

//  userName = userInput; // won't work as unknown can't be assigned to string

//TS detects this check and allows assigment of the unknown type to string
if (typeof userInput === "string") {
  userName === userInput;
}
