function dontGiveMeFive(start, end)
{
  // Buat variabel penampung untuk melihat hasil dari loop data dari parameter start hingga parameter end
  let result = []
  // Loop dari start hingga atau sama dengan end
  for (let i = start; i <= end; i++) {
    // Jika i yang telah diconvert ke string bukan karakter angka 5, 15, 25, dst
    if (!i.toString().includes('5')) {
      // maka hilangkan angka karakter 5 dan loop i hingga atau sama dengan end tanpa angka 5
      result.push(i)
      } 
  }
  console.log(result); // Output [1, 2, 3, 4, 6, 7, 8, 9]
  // Kembalikan panjang dari variabel array result
  return result.length 
}
console.log(dontGiveMeFive(1, 9)); // Output: 8
console.log(dontGiveMeFive(4, 17)); // Output: 12