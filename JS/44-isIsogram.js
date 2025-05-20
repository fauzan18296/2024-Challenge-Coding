function isIsogram(str) {
  let repeat = new Set()
  for (let i = 0; i < str.length; i++) {
    if (repeat.has(str[i].toUpperCase()) || repeat.has(str[i].toLowerCase())) { 
      return false
    } 
    repeat.add(str[i])
  }
  return true
}
console.log(isIsogram('Dermatoglyphics'));
console.log(isIsogram('isogram'));
console.log(isIsogram('moOse'));
console.log(isIsogram('aba'));
console.log(isIsogram(''));
