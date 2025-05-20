function getAverage(marks){
  //TODO : calculate the downward rounded average of the marks array
  //? Method 1
  // const resultAverage = marks.reduce((prevValue, currentValue) => prevValue + currentValue, 0) / marks.length
  // return resultAverage
  //? Method 2
  let average = marks.length
  let count = 0
  for (let i = 0; i <= average; i++) {
    count += i / average;
    // i = 0, count = 0 => count = 0 + 0 = 0
    // i = 1, count = 0 => count = 0 + 1 = 1
    // i = 2, count = 1 => count = 1 + 2 = 3 dan seterusnya.
  }
  return count
}
console.log(getAverage([1,2,3,4,5,])); // output: 3
