function friend(friends){
  /* Algoritma:
  1. buat sebuah variabel untuk menampung hasil akhir dalam bentuk array
  2. lalu lakukan iterasi/loop menggunakan for loop pada parameter friends
  3. setelah itu buat sebuah conditional if else
  4. setelah membuat if else buat kondisi jika setiap index atau setiap nama itu memiliki panjang 4 maka nama tersebut adalah temanmu selain itu jika panjang tidak sama dengan 4 maka munculkan array kosong atau [].
  5. kembalikan hasilnya / return result 
  */  
  let result = []
  for (let i = 0; i < friends.length; i++) {
    if (friends[i].length == 4) {
      result.push(friends[i])
    }
  }
  console.log(result); // Expected output: ['Ryan, Yous']
  return result
}
console.log(friend(["Ryan", "Kieran", "Jason", "Yous"])); // Expected output: ['Ryan, Yous']
console.log(friend(["Peter", "Stephen", "Joe"]));// Expected output: []
console.log(friend(["Jimm", "Cari", "aret", "truehdnviegkwgvke", "sixtyiscooooool"])); // Expected output: ['Jimm, Cari, aret']