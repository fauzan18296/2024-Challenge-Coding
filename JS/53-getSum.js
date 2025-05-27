function getSum(a, b) {
  let result = 0
  let maximum = Math.max(a, b)
  let minimum = Math.min(a, b)
  console.log(maximum);
  console.log(minimum);
  for (let i = minimum; i <= maximum; i++) {
    console.log(result += i)
  }
  console.log(result);
  return result
}
console.log(getSum(0,-1));
console.log(getSum(1,1));
console.log(getSum(-1,0));
console.log(getSum(1, 2));
console.log(getSum(0, 1));
console.log(getSum(-1, 2)); 