function divisors(integer) {
  let result = [] // Untuk menyimpan hasil faktor yang telah habis dibagi
  if (integer > 1) { // Untuk memastikan bahwa integer tidak sama dengan 1 dan yang difaktorkan adalah yang lebih dari 1 lalu bilangan prima itu sendiri adalah yang lebih dari 1
    for (let i = 2; i <= integer / 2; i++) { // Looping sampai integer dibagi 2 atau sama dengan integer dibagi 2
      if (integer % i == 0) { // Jika integer yang dibagi dengan i sama dengan habis dibagi atau simpel nya integer sisa bagi i adalah 0
        result.push(i) // Masukan hasil faktor ke dalam array result
      }
    }
  }
  console.log(result.length == 0 ? `${integer} is prime` : result);
  return result.length == 0 ? `${integer} is prime` : result // Jika panjang array dari variabel result adalah 0 maka munculkan integer adalah bilangan prima Jika tidak maka munculkan faktor dari hasil looping tadi
}
console.log(divisors(12)); // [2, 3, 4, 6]
console.log(divisors(25)); // [5]
console.log(divisors(13)); // "13 is prime"