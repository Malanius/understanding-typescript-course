type Combinable = number | string;
type ConversionType = "as-number" | "as-string";

const aliasedCombine = (
  input1: Combinable,
  input2: Combinable,
  resultConversion: ConversionType
) => {
  let result;
  if (
    (typeof input1 === "number" && typeof input2 === "number") ||
    resultConversion === "as-number"
  ) {
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

const aliasedCombineNums = aliasedCombine(30, 26, "as-number");
console.log(aliasedCombineNums);

const aliasedCombineNumStrings = aliasedCombine("30", "26", "as-number");
console.log(aliasedCombineNumStrings);

const aliasedCombineString = aliasedCombine("Java", "Script", "as-text");
console.log(aliasedCombineString);
