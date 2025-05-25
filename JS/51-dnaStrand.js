function dnaStrand(dna) {
  /* Algoritma: 
    1. Buat sebuah variabel untuk menyimpan hasil akhir dengan tipe data string
    2. Lakukan Looping/Iterasi menggunaka for loop/ while loop
    3. Setelah dimulai iterasi nya, buat sebuah conditional sesuai dengan huruf yang ada di dalam string dna dengan membandingkan nya contoh seperti if(dna(i) == 'A') dan seterusnya.
  */
  let result = ''
  for (let i = 0; i < dna.length; i++) {
    if (dna[i] == 'A') {
      result += 'T'
    } else if (dna[i] == 'T') { 
      result += 'A'
    } else if (dna[i] == 'G') {
      result += 'C'
    } else {
      result += 'G'
    }
  }
  console.log(result); // Expected output: 'TTTT', 'TAACG', 'CATA'
  return result
}
console.log(dnaStrand("AAAA")); // Expected output: 'TTTT'
console.log(dnaStrand("ATTGC")); // Expected output: 'TAACG'
console.log(dnaStrand("GTAT")); // Expected output: 'CATA'