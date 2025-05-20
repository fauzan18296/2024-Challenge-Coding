function descendingOrder(n){
  let converts = n.toString().split('').map(num => Number(num)).sort().reverse()
  console.log(converts);
  return parseInt(converts.join(''))
}
console.log(descendingOrder(42145));
console.log(descendingOrder(1021));
