const getCount = (str) => {
  // Algoritma
  // 1. Membuat char penentu yang akan ada di panjang textnya
  let char = "aeiou";
  // 2. Memulai loop untuk penelusuran  setiap huruf pada char dan memeriksa apakah huruf tersebut ada atau tidak didalam textnya
  for(let i = 0; i<str.length;i++){
    // 3. Jika bernilai true(benar)Maka eksekusi baris if
    if (str[i]){
      // 4. setelah itu Cek apakah huruf tersebut ada didalam char atau tidak, jika benar maka hitung length char nya
      return str.split("").filter(x => x == char.charAt() ||x == char.charAt(1) || x == char.charAt(2) ||x == char.charAt(3) || x == char.charAt(4)).length;
    }
  } 
  // 5. kecuali jika false dan tidak ada yang benar maka eksekusi return 0 sebagai nilai default
  return 0;
}
console.log(getCount("abracadabra"));//output:5
console.log(getCount("Hello World"));//output:3