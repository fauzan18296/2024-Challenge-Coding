function highAndLow(numbers){
  let arr = numbers.split(' ')
  let [high, low] = [Number(arr[0]), Number(arr[0])];
  console.log(arr);
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > high) {
      high = Number(arr[i])
    } else if (arr[i] < low ) {
      low = Number(arr[i])
    }
  }
  console.log(high);
  console.log(low);
  return [high, low].join(' ')
}
console.log(highAndLow("1 2 3 4 5"));
console.log(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"));
