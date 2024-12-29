function noSpace(x){
 // Algoritma => method string.replace()
 // jadi method ini akan menghapus atau  mengganti spasi dengan "" (tanpa spasi).
 // Jadi, /\s/g adalah ekspresi reguler yang berarti kita mencari semua kemunculan spasi dalam string. \s merepresentasikan spasi, dan opsi g berarti kita ingin mencocokkan semua spasi dalam string, bukan hanya yang pertama kali ditemukan.
return x.replace(/\s/g,"");// s adalah spasi dan g adalah global
}
console.log(noSpace("Hello World"));// HelloWorld