const literalCombine = (
  input1: number | string,
  input2: number | string,
  resultConversion: string
) => {
  let result;
  if (typeof input1 === "number" && typeof input2 === "number" || resultConversion === 'as-number') {
    result = +input1 + +input2;
  } else {
    result = input1.toString() + input2.toString();
  }
  // if (resultConversion === "as-number") {
  //   return +result;
  // } else {
  //   return result.toString();
  // }
  return result;
};

const literalCombineNums = literalCombine(30, 26, "as-number");
console.log(combineNumbers);

const literalCombineNumStrings = literalCombine("30", "26", "as-number");
console.log(combineNumbers);

const literalCombineString = literalCombine("Java", "Script", "as-text");
console.log(combineNames);
