function findOutlier(integers) {
  // Objective: Cari angka ganjil atau genap yang berbeda pada array yang menyimpan angka ganjil dan angka genap
  console.log(integers.length);
  const [even, odd] = [[], []]

  // Cari array angka genap
  for (let i = 0; i < integers.length; i++) {
    let int = integers[i]
    if (int % 2 == 0) {
      even.push(int)
    }
  }
  console.log(even); // Output -> Array(7) [ 2, 4, 0, 100, 4, 2602, 36 ] [ 160 ] [ 0, 2 ] [ 2 ]

  // Cari array angka ganjil
  for (let i = 0; i < integers.length; i++) {
    let int = integers[i]
    if (int % 2 !== 0) {
      odd.push(int)
    }
  }
  console.log(odd); // Output -> [ 11 ] Array(6) [ 3, 1719, 19, 11, 13, -21 ] [ 1 ] [ 1, 3 ] 

  console.log(even.length == 1 ? even[0] : odd[0]);

  // Jika angka genap panjang nya 1 maka angka genap itulah yang akan dimunculkan Jika tidak maka angka ganjil yang panjang nya 1 itulah yang akan dimunculkan
  return even.length == 1 ? even[0] : odd[0]
}
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36])); // Output => 11
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21])); // Output => 160
console.log(findOutlier([0, 1, 2])); // Output => 1
console.log(findOutlier([1, 2, 3])); // Output => 2