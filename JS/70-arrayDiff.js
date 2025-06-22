function arrayDiff(a, b) {
  // Jika panjang pada a sama dengan kosong atau tidak ada isi nya atau panjang dari b sama dengan kosong maka munculkan  a 
  if( a.length == 0 || b.length == 0 ) return a
  // Loop hingga panjang dari array a
  for (let i = 0; i < a.length; i++) {
    let firstList = a
    // Lalu loop hingga panjang dari array b
    for (let j = 0; j < b.length; j++) {
      let secondList = b
      // Jika firstList sama dengan secondList
      if (firstList[i] == secondList[j]) { 
        // Maka hapus elemen yang sama itu dari array a
        a.splice(i, 1) // akan hapus 1 elemen sesuai dengan indexnya atau i
        i-- // ini akan membuat i menjadi 0 berturut-turut saat looping
      } 
      console.log(firstList);
    }
  }
  return a 
}
console.log(arrayDiff([1, 2], [1])); // Output: [2]
console.log(arrayDiff([1,2,2], [1])); // Output: [2, 2]
console.log(arrayDiff([1, 2, 2, 2, 3], [2])); // Output: [1, 3]
console.log(arrayDiff([1,2,2], [])); // Output: [1,2,2]
console.log(arrayDiff([], [1, 2])); // Output: []
console.log(arrayDiff([1, 2, 3], [1, 2])); // Output: [3]
