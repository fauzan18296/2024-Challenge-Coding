const countPositivesSumNegatives = (input) => {
  let [numPositive, numNegative] = [0, 0]
  if(input == null || input.length == 0) return []
  //? cara 1
  // for (let i = 0; i < input.length; i++) {
  //   input[i] > 0 ? numPositive++ : numNegative += input[i]
  // }
  //? cara 2
  input.forEach(num => { num > 0 ? numPositive++ : numNegative += num })
  return [numPositive, numNegative] 
}
console.log(countPositivesSumNegatives([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15]))
console.log(countPositivesSumNegatives([0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14]))