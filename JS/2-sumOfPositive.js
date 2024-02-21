function positiveSum(arr) {
  var total = 0;
  for (i = 0; i < arr.length; i++) {
    // setup loop to go through array of given length
    if (arr[i] > 0) {
      // if arr[i] is greater than zero
      total += arr[i]; // add arr[i] to total
    }
  }
  return total; // return total
}
console.log(positiveSum([1, -4, 7, 12]));
console.log(positiveSum([1, 2, 3, 4, 5]));
console.log(positiveSum([-1, -2, -3, -4, -5]));
console.log(positiveSum([]));
console.log(positiveSum([-1, 2, 3, 4, -5]));
