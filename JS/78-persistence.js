function persistence(num) {
  // Objective => Mencari jumlah pada perkalian yang telah dilakukan
  let countMultiply = 0
  if (num < 9) {
    return 0
  } else {
  while (num > 9) {
    num = num.toString().split('').reduce((acc, curr) => acc * curr)
    countMultiply++
  }
  return countMultiply
}
}
console.log(persistence(39)); // 3
console.log(persistence(4)); // 0
