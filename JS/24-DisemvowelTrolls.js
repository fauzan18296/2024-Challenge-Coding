function disemvowel(str) {
  return str == "O" ? "O" : str.replace(/[aeiou]/gi, "");
}
console.log(disemvowel("This website is for losers LOL!" ))