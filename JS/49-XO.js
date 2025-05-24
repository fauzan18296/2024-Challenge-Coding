function XO(str) { 
  let countChar = 0
  let result = []
  for (let i = 0; i < str.length; i++) {
    char = str[i]
    if (char.toLowerCase() == 'x') countChar++
    // result.push(countChar)
    if (char.toLowerCase() == 'o') countChar--
    result.push(countChar)
  }
  console.log(result);
  console.log(countChar);
  return countChar == 0
}
console.log(XO("ooxx")); // Expected Output: true
console.log(XO("ooxxx")); // Expected Output: false
console.log(XO("ooxXm")); // Expected Output: true
