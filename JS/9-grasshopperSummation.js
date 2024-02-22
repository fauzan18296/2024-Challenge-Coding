const summation =  (num) => {
 // Algoritma:
 // 1) Membuat  variabel baru untuk menampung hasil penjumlahan.
 let sum = num;
 // 2) Melakukan perulangan dari index 0 sampai dengan angka yang diberikan pada parameter num.
 for(let i = 0; i<num; i++) {
  sum += i;
 }
 // 3) Lalu mereturn nilai yang telah disimpan dalam variabel "sum".
 return sum;
}
console.log(summation(5)); // 10