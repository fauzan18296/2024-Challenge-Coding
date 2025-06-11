function stray(numbers) {
  let result = {}
  for (let i = 0; i < numbers.length; i++) {
    result[numbers[i]] = (result[numbers[i]] || 0) + 1 // Menangani nilai jika result[numbers[i]] adalah undefined maka undefined akan digantikan dengan 0 dan ditambahkan 1
    console.log(result[numbers[i]]);
    
  }
  console.log(result); // {Key -> 1: countNumberShowing -> 2, Key -> 2: countNumberShowing -> 1}
  console.log(Object.keys(result));
  return parseInt(Object.keys(result).filter(key => result[key] === 1).map(num => Number(num))) // Return key dari properti object/result lalu filterkan key nya yang hanya muncul sekali atau 1 kali saja lalu convert menjadi tipe data angka
}
console.log(stray([1, 1, 2])); // Output : 2
console.log(stray([17, 17, 3, 17, 17, 17, 17])); // Output : 3
