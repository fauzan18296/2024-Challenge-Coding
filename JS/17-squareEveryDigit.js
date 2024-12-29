const squareDigits = (num) => {
 // Algoritma
 // 1. Convert num menjadi  string untuk memudahkan operasi karakter
 let strNum = String(num);
 // 2. Membuat variabel penyimpan hasil 
let results = [];
 // 3. looping untuk penelusuran masing masing angka yang telah di convert menjadi string
for(let i = 0; i<strNum.length; i++){
  // 4. Membuat variabel untuk menyimpan fungsi eksponen
 let pow = Math.pow(parseFloat(strNum[i]), 2)
  // 5. lalu dimasukkan ke variabel results dengan push()
  results.push(pow)
 }
 // 6. lalu mengenbalikan hasil dari variabel results 
return Number(results.join(""));
}
 console.log(squareDigits(3212))
 console.log(squareDigits(2112))
 console.log(squareDigits(0))
