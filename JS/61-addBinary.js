function addBinary(a, b) {
  // Ubah angka menjadi string dalam basis bilangan 2, yaitu biner
    return a + b >= 0 ? (a + b).toString(2) : (~a + b).toString(2)
}
console.log(addBinary(1, 1)); // Expected output: "10"
console.log(addBinary(5, 9)); // Expected output: "1110"
console.log(addBinary(1, 2)); // Expected output: "11"