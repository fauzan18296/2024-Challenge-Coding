function countBits(n) {
  let bytes = n.toString(2).split('')
  console.log(bytes);
  let count = 0
  for (let i = 0; i < bytes.length; i++) {
    if (bytes[i] == '1') {
      count++
    }
  }
  return count;
}
console.log(countBits(0)); // Output => 0
console.log(countBits(4)); // Output => 1
console.log(countBits(7)); // Output => 3
