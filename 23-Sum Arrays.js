// Sum Numbers
function sum (numbers) {
return numbers ? numbers.reduce((a,b) => a+b,0) : 0
};

console.log([])
console.log(sum([1, 5.2, 4, 0, -1]))