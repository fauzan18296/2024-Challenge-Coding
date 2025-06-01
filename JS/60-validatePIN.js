function validatePIN(pin) {
  if (pin.length != 4 && pin.length != 6) {
    return false
  } 
  console.log(".".charCodeAt());
  
  for (let i = 0; i < pin.length; i++) {
   if (pin[i] > '9' || pin[i] < '0') { // ini akan check unicode dari karakter angka 0 dan akan check unicode dari karakter angka 9
      return false
    }
  }
  return true
}
console.log(validatePIN("1"));
console.log(validatePIN("-1234"));
console.log(validatePIN("1234"));
console.log(validatePIN("000000"));
console.log(validatePIN("a1234"));
console.log(validatePIN("-1.234"));
