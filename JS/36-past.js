function past(h, m, s) {
  // Mencari berapa milisecond atau berapa milidetik
  //Explanation:
  // 1 jam = 3_600_000 milidetik
  // 1 menit = 60_000 milidetik
  // 1 detik = 1_000 milidetik
  // jadi inti dari code ini itu mencari hasil waktu dari jam * 3_600_000 + menit * 60_000 + detik * 1_000 untuk dijadikan milidetik
  let hours = h;
  let minutes = m;
  let seconds = s;
  let totalMiliSeconds = hours * 3_600_000 + minutes * 60000 + seconds * 1000;
  return totalMiliSeconds
}
console.log(past(0, 1, 1));// Expected output: 61000
console.log(past(1, 1, 1));// Expected output: 366100
