const makeNegative = (num) => {
  let result = num > -num ? -num : num;
  return result;
};
console.log(makeNegative(1));
console.log(makeNegative(0.12));
console.log(makeNegative(-5));
console.log(makeNegative(0));
