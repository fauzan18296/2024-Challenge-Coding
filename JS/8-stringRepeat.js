const repeatStr = (n, s) => {
 // Algoritma:
 // 1) Membuat string baru -> untuk memasukkan parameter s.
 let str = '';
 // 2) setelah membuat string baru -> kita akan melakukan perulangan sebanyak n dan menambahkan parameter s ke string yang sudah dibuat.
 for(let i=0;i<n;i++){
  str += s;
 }
 // 3) return hasil dari perulangan yang telah dibuat.
 return str;
}
console.log(repeatStr(6,"I"));