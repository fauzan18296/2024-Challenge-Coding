const grow = (x) => x.reduce((prevValue, currentValue) => prevValue * currentValue, 1);
console.log(grow([1, 2, 3]));
console.log(grow([2, 2, 2, 2, 2, 2]));
