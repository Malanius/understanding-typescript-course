//infered as  (n1: number, n2: number): nubmer
const addFn = (n1: number, n2: number) => n1 + n2;

//infered as        (num: number): void
const printResult = (num: number) => {
  console.log("Result: " + num);
};

const printResultReturn = (num: number): undefined => {
  console.log("Result: " + num);
  return;
};

printResult(addFn(5, 14));
