function points(games) {
  let result = 0
  for (const val of games) {
    console.log(val);
    if (val[0] > val[2]) {
      result += 3
    } else if (val[0] == val[2]) {
      result += 1
    } else {
      result += 0
    }
  }
 return result
}
console.log(points(["1:0","2:0","3:0","4:0","2:1","3:1","4:1","3:2","4:2","4:3"]));
