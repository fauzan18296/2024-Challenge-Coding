function hero(bullets, dragons) {
  /* Algoritma : 
  1. buat sebuah variabel untuk menampung 2 peluru yang dibutuhkan untuk membunuh naga
  2. lakukan pengecekan jika pelurunya cukup untuk membunuh naga maka munculkan true jika peluru tidak cukup untuk membunuh naga maka munculkan false
  */
  const bulletNeedForDragonDead = dragons * 2
  return bullets >= bulletNeedForDragonDead ? true : false
}
console.log(hero(10, 5)); // expected output: true
console.log(hero(1500, 751)); // expected output: false
console.log(hero(0, 1)); // expected output: false
console.log(hero(100, 40)); // expected output: true