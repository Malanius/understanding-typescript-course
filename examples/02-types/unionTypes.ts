const combine = (input1: number | string, input2: number | string) => {
  const result = input1 + input2;
  return result;
};

const combineNumbers = combine(30,26);
console.log(combineNumbers);

const combineNames = combine('Java', 'Script');
console.log(combineNames);
