/* Algoritma atau logika dari angka yang minus di convert ke angka plus begitupun sebaliknya dengan cara menentukan condition dari angkanya  */ 
let opposite = (number) => number > 1 || number ? -number:number;

console.log(opposite(4));
console.log(opposite(-5));
console.log(opposite(33));