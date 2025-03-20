const abbrevName = (name) => name.split(" ").map(word => word[0]).join('.').toUpperCase()

console.log(abbrevName('Sam Harris'))
console.log(abbrevName('patrick feeney'))