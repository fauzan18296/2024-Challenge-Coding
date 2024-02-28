const countSheeps = (sheep) => {
 // Algoritma
 let s = [];
 //  1. Mulai dengan statement perulangan untuk  mencari jumlah atau panjang dari tipe data true(benar).
 for(let i = 0; i<sheep.length; i++){
  // 2. Jika sheep dari index ke 0 bernilai true(benar).
   if(sheep) {
    // 3. Maka manipulasi data dari sheep dengan method filter dan method length untuk menghitung length yang berisi nilai true(benar).
   return sheep.filter((el) => el == true).length;
 }else {
  // 3. Jika false(salah) dan error, maka keluarkan hasil atau output yang bernilai undefined atau null.
   return undefined;
 }
}
// 4. Setelah itu return 0 sebagai nilai default saat tidak ada nilai yang benar.
return 0;
};

console.log(countSheeps([true,  true,  true,  false,
 true,  true,  true,  true ,
 true,  false, true,  false,
 true,  false, false, true ,
 true,  true,  true,  true ,
 false, false, true,  true]));//Output: 17

console.log(countSheeps([]));//Output: 0

console.log(countSheeps([null]));//Output: 0

console.log(countSheeps([undefined]));//Output: 0