function nbYear(p0, percent, aug, p) {
  let years = 0
  while (p0 < p) {
    p0 = Math.floor(p0 + p0 * percent / 100 + aug);
    console.log(p0);
    years++
    // console.log(years);
  }
  return years
}
console.log(nbYear(1500, 5, 100, 5000)); // Expected output: 15
console.log(nbYear(1500000, 2.5, 10000, 2000000)); // Expected output: 10
console.log(nbYear(1500000, 0.25, 1000, 2000000)); // Expected output: 94
