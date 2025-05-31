function findNextSquare(sq) {
  /* Algoritma: 
  1. Jika value dari sq adalah -1 atau sq < 0 maka munculkan null
  2. Selanjutnya buat variabel yang menampung akar dari parameter sq
  3. Lalu buat variabel untuk hasil akar yang telah di bulatkan
  4. Jika pembulatan dikalikan dengan pembulatan sama dengan akar maka munculkan pembulatan ditambahkan 1 yang dipangkatkan 2 jika tidak sama dengan akar maka munculkan -1 atau logika simpelnya -> 
  roundedSqrt * roundedSqrt === sq ? (roundedSqrt + 1) ** 2 : -1;
  */
  if(sq < 0) return null;
  let perfectSquare = Math.sqrt(sq)
  let roundedSqrt = Math.round(perfectSquare)
  // Hasil akar
  console.log(perfectSquare); // Output: 11, 25, 10.677078..., dst
  // Hasil pembulatan
  console.log(roundedSqrt); // Output: 11, 25, 11, dst
  // Hasil pembulatan dikalikan dengan pembulatan atau pembulatan dipangkat 2
  console.log(roundedSqrt * roundedSqrt);
  return roundedSqrt * roundedSqrt === sq ? (roundedSqrt + 1) ** 2 : -1;
}
console.log(findNextSquare(121)); // Expected Output: 144
console.log(findNextSquare(625)); // Expected Output: 676
console.log(findNextSquare(114)); // Expected Output: -1
console.log(findNextSquare(155)); // Expected Output: -1
console.log(findNextSquare(342786627)); // Expected Output: -1
