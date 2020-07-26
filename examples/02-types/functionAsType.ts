const addFn = (n1: number, n2: number) => n1 + n2;

let combineValues: (a: number, b: number) => number;

combineValues = addFn;
// combineValues = () => {
//   console.log("Trolled");
// };
console.log(combineValues(8, 8));
