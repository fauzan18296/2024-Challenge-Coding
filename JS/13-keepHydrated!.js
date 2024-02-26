const litres = (time) =>  Math.floor(time * 0.5);
console.log(litres(3));
console.log(litres(6.7));
console.log(litres(11.8));
/*Explain Algoritma: 
1)Kode tersebut mendefinisikan sebuah fungsi yang disebut litres.
2)Fungsi tersebut memiliki satu parameter bernama time, yang diasumsikan mewakili waktu dalam suatu satuan (misalnya detik, menit, atau jam).
3)Dalam fungsi litres, waktu yang diberikan (time) dikalikan dengan 0.5. Ini mungkin merupakan representasi bahwa setiap satuan waktu (detik, menit, atau jam) akan berkontribusi setengah liter.
4)Hasil dari perkalian tersebut kemudian dibulatkan ke bawah menggunakan fungsi Math.floor(). Ini berarti jika hasil perkalian desimal, maka akan dibulatkan ke bawah ke bilangan bulat terdekat.
5)Akhirnya, hasil yang sudah dibulatkan tersebut akan dikembalikan sebagai output dari fungsi litres.
Jadi, secara keseluruhan, fungsi ini dapat digunakan untuk menghitung perkiraan volume dalam liter berdasarkan waktu yang diberikan, dengan asumsi bahwa setiap satuan waktu memberikan kontribusi sebesar setengah liter. */ 