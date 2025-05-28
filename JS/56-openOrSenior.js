function openOrSenior(data) {
  /* Algoritma:
   1. Buat sebuah variabel array untuk menyimpan data category open atau senior.
   2. Setelah itu lakukan iterasi loop dari index 0 sampai index terakhir dari data.
   3. Lalu buat sebuah kondisi if else untuk memeriksa apakah data dari index awal memiliki usia >= 55 dan apakah data dari index awal memiliki handicap > 7 jika perbandingan tersebut betul/true maka masukkan data 'Senior' ke variabel result jika perbandingan nya salah/false maka masukkan data 'Open' ke variabel result.
   4. return variabel result nya.
  */
  let result = []
  for (let i = 0; i < data.length; i++) {
    if (data[i][0] >= 55 && data[i][1] > 7) {
      result.push('Senior')
    } else {
      result.push('Open')
    }
  }
  console.log(result);
  return result
}
console.log(openOrSenior([[45, 12],[55,21],[19, -2],[104, 20]])); // Expected output: ['Open', 'Senior', 'Open', 'Senior']
console.log(openOrSenior([[18, 20], [45, 2], [61, 12], [37, 6], [21, 21], [78, 9]])); // Expected output: ['Open', 'Open', 'Senior', 'Open', 'Open', 'Senior']
console.log(openOrSenior([[3, 12], [55, 1], [91, -2], [53, 23]]));  // Expected output: ['Open', 'Open', 'Open', 'Open']

