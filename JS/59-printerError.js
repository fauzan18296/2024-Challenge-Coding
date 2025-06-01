function printerError(s) {
  let count = 0 // Untuk menghitung unicode dari huruf string awal sampai huruf string akhir
  for (let i = 0; i < s.length; i++) {
    console.log(s[i] > 'm');
    if (s[i] > 'm') { // apakah unicode dari s[i] tersebut lebih besar dari huruf 'm' atau simpelnya s.charCodeAt(0) > 'm'.charCodeAt()
      count++
    }
  }
  console.log('m'.charCodeAt()); // untuk mengetahui unicode dari huruf 'm'
  console.log(count);
  return [count, s.length].join('/'); // format output
}
console.log(printerError("aaaxbbbbyyhwawiwjjjwwm")); // Expected Output: "8/22"
console.log(printerError("aaaaaaaaaaaaaaaabbbbbbbbbbbbbbbbbbmmmmmmmmmmmmmmmmmmmxyz")); // Expected Output: "3/56"
console.log(printerError("aaabbbbhaijjjm")); // Expected Output: "0/14"