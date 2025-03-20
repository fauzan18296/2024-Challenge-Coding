// ? Algoritma: jika data nya tidak kosong maka hitung rata-rata datanya dan bagi dengan panjang data nya jika tidak ada datanya maka tampilkan 0
const findAverage = (array) => array.reduce((a, b) => a + b, 0) / array.length || 0;
console.log(findAverage([1,1,1])) //output : 1
console.log(findAverage([1,2,3])) //output : 2
console.log(findAverage([1,2,3,4])) //output : 2.5
console.log(findAverage([])) //output : 0