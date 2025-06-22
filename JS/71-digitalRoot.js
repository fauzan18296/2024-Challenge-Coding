function digitalRoot(n) {
  // Looping selama n nya masih 2 digit atau lebih, Looping hingga digit nya yaitu satuan => 0-9
  while (n > 9) {
    // Ketika n lebih dari satuan 9 maka pecah parameter n nya menjadi array lalu dijumlahkan masing-masing array dan convert menjadi angka supaya bisa dijumlahkan
    n = n.toString().split('').reduce((acc, digit) => acc + Number(digit), 0)
    console.log(n);
  }
  console.log(n);
  return n
}
console.log(digitalRoot(16)); // 7
console.log(digitalRoot(456)); // 6
console.log(digitalRoot(942)); // 6
console.log(digitalRoot(493193)); // 11