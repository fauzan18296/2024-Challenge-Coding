function duplicateEncode(word) {
  let myWord = word.toLowerCase()
  let result = {}
   let char = ''
  for (const key of myWord) {
    result[key] = (result[key] || 0) + 1
  }

  for (const freq of myWord) {
    console.log(result[freq]);
    // Akan check apakah nilai atau freq dari result sama dengan 1 jika iya maka tambahkan '(' atau jika nilai atau freq dari result lebih dari 1 maka tambahkan ')'
    if (result[freq] == 1) {
      char += '('
    } else if (result[freq] > 1) {
      char += ')'
    }
  }
  console.log(result);
  console.log(char);
  return char
}
console.log(duplicateEncode("din")); // Output => "((("
console.log(duplicateEncode("recede")); // Output => "()()()"
