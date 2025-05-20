function bmi(weight, height) {
  let bmi = weight / Math.pow(height, 2);
  return bmi <= 18.5 ? 'Underweight': bmi <= 25.0 ? 'Normal' : bmi <= 30.0 ? 'Overweight' : 'Obese';
}
console.log(bmi(50, 1.80));
console.log(bmi(80, 1.80));
console.log(bmi(90, 1.80));
console.log(bmi(100, 1.80));
