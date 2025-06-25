function duplicateCount(text) {
  let lowerChar = text.toLowerCase()
  let myChar = {}
  let countChar = 0
  // For of adalah looping untuk loop isi dari data
  for (const key of lowerChar) {
    console.log(key);
    myChar[key] = (myChar[key] || 0) + 1
  }

  // For in adalah looping untuk loop index dari data atau loop hanya isi dari datanya
  for (const freq in myChar) {
    console.log(myChar[freq]);
    // Akan check jika nilai dari key lebih dari 1
    if (myChar[freq] > 1) {
      countChar++
      console.log(countChar);
    }
  }

  console.log(lowerChar);
  console.log(myChar);
  console.log(countChar);
  return countChar
}
console.log(duplicateCount("")); // Output => 0
console.log(duplicateCount("abcde")); // Output => 0
console.log(duplicateCount("aabbcde")); // Output => 2
console.log(duplicateCount("aabBcde")); // Output => 2
console.log(duplicateCount("Indivisibility")); // Output => 1
console.log(duplicateCount("indivisibility")); // Output => 1
console.log(duplicateCount("Indivisibilities" )); // Output => 2
