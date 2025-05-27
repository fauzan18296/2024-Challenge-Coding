function longest(s1, s2) {
  let alphabet = s1.concat(s2).split('').sort()
  let result = []
  for (let i = 0; i < alphabet.length; i++) {
    if (!result.includes(alphabet[i])) {
     result.push(alphabet[i])
    }
  }
    console.log(result.join(''));
  console.log(alphabet);
  return result.join('')
}
console.log(longest("aretheyhere", "yestheyarehere"));
console.log(longest("loopingisfunbutdangerous", "lessdangerousthancoding"));
