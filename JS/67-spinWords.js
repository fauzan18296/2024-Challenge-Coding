function spinWords(string) {
  // myWords <- variabel untuk menyimpan kalimat yang telah dipisah 
  let myWords = string.split(" ")
  // result <- variabel untuk menyimpan kalimat yang akan dibalik saat bagian kalimat tersebut memiliki panjang lebih dari sama dengan 5
  let result = []
  // Looping <- dari 0 hingga panjang dari variabel myWords
  for (let i = 0; i < myWords.length; i++) {
    // word <- variabel untuk menyimpan pecahan kalimat sesuai dengan looping kalimat
    let word = myWords[i]
    // jika panjang dari kalimat lebih dari sama dengan 5
    if(word.length >= 5) {
      // reverse <- Variabel untuk menyimpan hasil potongan kalimat yang dibalikkan
      let reverse = ""
      // Maka balikkan potongan kalimat yang panjangnya lebih dari sama dengan 5
      for (let j = word.length - 1; j >= 0; j--) {
        reverse += word[j]
      }
      // Masukan variabel reverse ke variabel result untuk menyimpan hasil balikkan kalimatnya
      result.push(reverse)
    } else {
      // Selain itu jika tidak ada  potongan kalimat yang panjang nya lebih dari sama dengan 5 maka masukan saja potongan kalimat tersebut
      result.push(word)
    }
  } 
  // Kembalikan variabel result yang sudah di gabung
 return result.join(" ")
}
console.log('===== Output Program : \n');
console.log(spinWords("Welcome")); // Expected output: "emocleW"
console.log(spinWords("Hey fellow warriors")); // Expected output: "Hey wollef sroirraw"
console.log(spinWords("This is a test")); // Expected output: "This is a test"