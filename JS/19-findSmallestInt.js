function findSmallestInt(arr) {
  let smallest = arr[0]
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {  
      smallest = arr[i]
    } 
  }
  return smallest
}
console.log(findSmallestInt([34, 15, 88, 2]))
//Output: 2
console.log(findSmallestInt([78,56,232,12,8]))