const removeChar= (str) =>{ 
 // Algoritma 
 // 1)Menggunakan method split -> untuk convert menjadi  array dari string.
 let newStr = str.split("");
// 2)Menggunakan method pop -> untuk menghapus elemen array terakhir.
newStr.pop();
// 3)Menggunakan method shift -> untuk menghapus elemen array awal.
newStr.shift();
// 4)Menggunakan method join -> untuk menggabungkan elemen array menjadi baris string lalu return untuk melihat output.
return newStr.join("");
};
console.log(removeChar("eloquent"));//Output:loquen
console.log(removeChar("country"));//Output:ountr
console.log(removeChar("person"));//Output:erso
