const basicOp = (operation, value1, value2)=>{
  //Code
  return operation == "+"  ? value1 + value2 : operation == "-" ? value1 - value2:operation=="*"? value1 * value2:value1/value2;
}
console.log(basicOp("+",4,7));
console.log(basicOp("-",15,18));
console.log(basicOp("*",5,5));
console.log(basicOp("/",49,7));