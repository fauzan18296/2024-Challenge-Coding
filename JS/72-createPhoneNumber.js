function createPhoneNumber(numbers) {
  // [phoneNumberCityFormat, phoneNumber] <- variabel untuk menyimpan phone number city format dan menyimpan phone number format
  let [phoneNumberCityFormat, phoneNumberFormat] = ['', '']
  for (let i = 0; i < numbers.length; i++) {
    let myPhoneNum = numbers[i]
    // jika index kurang dari 3
    if (i < 3) {
      // maka buat phone number city format
      phoneNumberCityFormat += myPhoneNum
    } // selain kondisi diatas, jika index nya lebih dari sama dengan 3
    else if (i >= 3) {
      // maka 
      phoneNumberFormat += myPhoneNum
    }
  }
  
  console.log(phoneNumberFormat.substring(0, 3) + '-' + phoneNumberFormat.substring(3));
  console.log(`(${phoneNumberCityFormat}) ${phoneNumberFormat.substring(0, 3) + '-' + phoneNumberFormat.substring(3)}`);

  // myPhoneNumber <- Format phoneNumber
  let myPhoneNumber = `(${phoneNumberCityFormat}) ${phoneNumberFormat.substring(0, 3) + '-' + phoneNumberFormat.substring(3)}`
  return myPhoneNumber
}
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output => "(123) 456-7890"
console.log(createPhoneNumber([1, 1, 1, 1, 1, 1, 1, 1, 1, 1])); // Output => "(111) 111-1111"
console.log(createPhoneNumber([1, 2, 3, 4, 5, 6, 7, 8, 9, 0])); // Output => "(123) 456-7890"
