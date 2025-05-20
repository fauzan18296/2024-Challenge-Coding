function sumTwoSmallestNumbers(numbers) {  
  // let [num1, num2] = numbers.sort((a, b) => a - b)
  // console.log(num1, num2);
  // return num1 + num2
  let min1 = Infinity;
  let min2 = Infinity;

  for (let i = 0; i < numbers.length; i++) {
    let num = numbers[i];
    if (num < min1) {
      min2 = min1;
      min1 = num;
      console.log(min1, min2);
    } else if (num < min2) {
      min2 = num;
      console.log(min2);
    }
  }
  console.log(min1, min2);
  return min1 + min2;
}
console.log(sumTwoSmallestNumbers([19, 5, 42, 2, 77]));
console.log(sumTwoSmallestNumbers([10, 343445353, 3453445, 3453545353453]));