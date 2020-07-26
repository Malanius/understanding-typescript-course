const addFn = (n1: number, n2: number) => n1 + n2;

let combineValues: Function;

combineValues = addFn;
console.log(combineValues(8, 8));
