function findShort(s) {
  let shortest = s.split(' ');
  let [short1, short2] = [shortest[0].length, shortest[0].length]

  for (let i = 0; i < shortest.length; i++) {
    let current = shortest[i].length; // dapatkan panjang kalimat dimulai dari awal index
    if (current < short1) { // jika panjang kalimat lebih kecil dari panjang kalimat sebelumnya atau logika simpel nya if(short1 < short2)
      short2 = short1 // kalimat sebelumnya menjadi kalimat kedua
      short1 = current // kalimat sekarang menjadi kalimat pertama
      console.log(short1,short2); // untuk memastikan kalau logika ini benar
    }
  }
  console.log(short1, short2); // expected output: [3, 4], [3, 5], [2, 5]
  return short1
}
console.log(findShort("bitcoin take over the world maybe who knows perhaps"));// expected output: 3
console.log(findShort("turns out random test cases are easier than writing out basic ones"));// expected output: 3
console.log(findShort("Let's travel abroad shall we"));// expected output: 2
