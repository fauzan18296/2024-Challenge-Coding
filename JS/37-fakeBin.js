const fakeBin = (x) => {
  let converts = x.split('').map(strToNum => Number(strToNum) < 5 ? 0 : 1);
  return converts.join('')
}
console.log(fakeBin('45385593107843568'));