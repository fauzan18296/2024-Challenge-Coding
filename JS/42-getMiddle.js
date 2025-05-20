function getMiddle(s) {
  let middle = Math.floor(s.length / 2);
  console.log(middle);
  return s.length % 2 ? s.charAt(middle) : s.slice(middle - 1, middle + 1);
}
console.log(getMiddle("test"));
console.log(getMiddle("testing"));
console.log(getMiddle("middle"));
