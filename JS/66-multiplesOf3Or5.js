function solution(number) {
  // Buat variabel array result untuk cek penjumlahan masing-masing hasil data angka yang di loop
  let result = []
  // Buat variabel untuk menampung data angka yang akan dijumlahkan dengan angka yang habis dibagi 3 atau yang habis dibagi 5
  let count = 0
  // Buat for loop untuk looping hingga angka yang telah ditentukan pada parameter fungsi
  for (let i = 1; i < number; i++) {
    // Buat kondisi apakah pada iterasi atau varibel i yang habis dibagi 3 atau apakah ada pada iterasi atau variabel i  yang habis dibagi 5 jika benar maka akan dijumlahkan jika salah/angkanya negatif maka munculkan 0. Logika simpelnya ->  i % 3 == 0 || i % 5 == 0 ? result.push(count += i) : 0
    i % 3 == 0 || i % 5 == 0 ? result.push(count += i) : 0
    // NOTE : Operator % ini adalah simbol untuk menemukan angka sisa baginya
  }
  console.log(result); // Output: [ 3, 8, 14, 23 ]
  console.log(count); // Output: 23
  // Kembalikan nilai jumlah
  return count
}
console.log(solution(10)); // Output: 23
