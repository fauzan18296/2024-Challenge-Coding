function isValidWalk(walk) {
  // Objective => Mencari jalan yang hanya butuh 10 menit saja dan Mencari jumlah jalan yang sama
  let result = {}
  for (const key of walk) {
    // Mencari jumlah jalan yang diambil dan akan dijadikan sebagai nilai dari objek result
    result[key] = (result[key] || 0) + 1
  }

  for (const freq in result) {
    console.log(result['n'] == result['s'] && result['e'] == result['w']);
    // Jika jalan yang diambil tidak sama dengan 10 menit, maka jalan tersebut tidak valid atau false
    if (walk.length != 10) {
      return false
    } // Jika jalan yang diambil sama dengan 10 menit, dan jumlah jalan yang dimiliki sama maka jalan tersebut valid atau true
    else if (result['n'] == result['s'] && result['e'] == result['w']) {
      return true
    } else {
      return false
    }
  }
}
console.log(isValidWalk(['n','s','n','s','n','s','n','s','n','s'])); // Output => true
console.log(isValidWalk(['w'])); // Output => false
console.log(isValidWalk(['n','n','n','s','n','s','n','s','n','s'])); // Output => false
console.log(isValidWalk([['w','e','w','e','w','e','w','e','w','e','w','e']])); // Output => false
