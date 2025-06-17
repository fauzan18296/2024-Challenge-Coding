function likes(names) {
  let result = ''
  for(let i = 0; i < names.length; i++) {
    let name = names.length
    if (name == 1) {
     result = `${names[0]} likes this`
    } else if (name == 2) {
    result = `${names[0]} and ${names[1]} like this`
    } else if (name == 3) {
      result = `${names[0]}, ${names[1]} and ${names[2]} like this`
    } else if (name > 2) {
      result = `${names[0]}, ${names[1]} and ${name - 2} others like this`
    } 
  }

  console.log(result || '' ? result : 'no one likes this');
  return result || '' ? result : 'no one likes this'
}

console.log(likes([])); // Expected Output: "no one likes this"
console.log(likes(["Peter"])); // Expected Output: "Peter likes this"
console.log(likes(["Jacob", "Alex"])); // Expected Output: "Jacob and Alex like this"
console.log(likes(["Max", "John", "Mark"])); // Expected Output: "Max, John and Mark like this"
console.log(likes(["Alex", "Jacob", "Mark", "Max"])); // Expected Output: "Alex, Jacob and 2 others like this"
