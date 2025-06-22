function findOdd(A) {
  // result <- Variabel yang akan berisi object yang berisi key dan value nya
  let result = {}
  // Looping hingga panjang dari A
  for (let i = 0; i < A.length; i++) {
    // Lalu isi variabel result sesuai dengan properti keynya dan value yang akan berisi jumlah angka yang muncul pada array A
    result[A[i]] = (result[A[i]] || 0) + 1
  } 
  console.log(result);
  console.log(Object.keys(result));
  // Lalu return Object yang berisi key dan temukan value atau find value angka yang jumlahnya ganjil/angka yang tidak habis dibagi 2 sesuai dengan key dari variabel result
  return 0 || Number(Object.keys(result).find(key => result[key] % 2 !== 0))
}
console.log(findOdd([1,1,2])); // Output: 2
console.log(findOdd([1,2,2,3,3,3,4,3,3,3,2,2,1])); // Output: 4
console.log(findOdd([0,1,0,1,0])); // Output: 0
console.log(findOdd([7])); // Output: 7
console.log(findOdd([1,1,2,-2,5,2,4,4,-1,-2,5])); // Output: -1