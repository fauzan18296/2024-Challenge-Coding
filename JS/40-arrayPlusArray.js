function arrayPlusArray(arr1, arr2) {
  let joinArrays = [...arr1, ...arr2] // gabungkan array dengan cara spread operator tujuannya supaya lebih mudah untuk menjumlahkan masing-masing elemen array
  console.log(joinArrays); // Expected output: Array(6) [1, 2, 3, 4, 5, 6]
  let result = 0 // variabel untuk menampung hasil semua penjumlahannya

  // Memulai Iterasi dari 0 sampai dengan panjang array
  for (let i = 0; i < joinArrays.length; i++) {
    result += joinArrays[i]
  }
  console.log(result); // Output: 21
  return result;
}
console.log(arrayPlusArray([1, 2, 3], [4, 5, 6])); // Expected Output: 21