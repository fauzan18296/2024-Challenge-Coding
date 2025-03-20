// ? Algoritma: buat sebuah kalimat yaitu 'nama + plays banjo' sesuai dengan nama nya yang huruf depannya adalah R ataupun r
const areYouPlayingBanjo = (name) => name.split('')[0] === 'R' || name.split('')[0] === 'r' ? `${name} plays banjo` : `${name} does not play banjo`;

console.log(areYouPlayingBanjo('Adam'))//Output: Adam does not play banjo
console.log(areYouPlayingBanjo('Ringo'))//Output: Ringo plays banjo
console.log(areYouPlayingBanjo('rolf'))//Output: rolf plays banjo