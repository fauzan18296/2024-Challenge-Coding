function lovefunc(flower1, flower2){
 // Algoritma: Jika flower1 memiliki nilai genap dan flower2 memiliki nilai ganjil maka akan menghasilkan true begitupun sebaliknya.
 return flower1 % 2 == 0 == flower2 % 2 !=0?true:false;
}
console.log(lovefunc(2,3)); 
console.log(lovefunc(1,4)); 
console.log(lovefunc(2,2)); 
console.log(lovefunc(2,4)); 
console.log(lovefunc(0,0)); 