function maskify(cc) {
  let result = []
  for (let i = 0; i < cc.length; i++)  {
    console.log(cc[i]);
    console.log(i >= cc.length - 4);
    if (i >= cc.length - 4) { // Jika index lebih besar dari 12 atau sama dengan 12 maka munculkan angka yang index nya lebih besar dari 12 atau sama dengan 12
      result.push(cc[i]) // push ke array
    } else { // Jika index kurang dari 12 atau tidak sama dengan 12 maka munculkan symbol #
      result.push("#")
    }
  }
  console.log(result.join('')); // Expected output: '##########5616', '1', '#1111'
  return result.join('')
}
console.log(maskify('4556364607935616')); // Expected output: "##########5616"
console.log(maskify('1')); // Expected output: "1"
console.log(maskify('11111')); // Expected output: "#1111"