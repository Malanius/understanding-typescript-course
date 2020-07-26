const addFn = (n1: number, n2: number) => n1 + n2;

let combineValues: (a: number, b: number) => number;

//void in the callback return types specifies that any returned vlue won't be used
const addAndHande = (n1: number, n2: number, cb: (num: number) => void) => {
  const result = n1 + n2;
  cb(result);
};

combineValues = addFn;
// combineValues = () => {
//   console.log("Trolled");
// };
console.log(combineValues(8, 8));

addAndHande(10, 20, (num) => {
  console.log(num);
});
