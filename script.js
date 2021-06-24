/*
var a = 6;
var b = 2;

console.log(a + b);
console.log(a - b);
console.log(a * b);
console.log(a / b);
console.log(a ** b);

*/

//increment(bir çıkarıp atıyor)
/*
var a = 6;
var b = 3;

a = --b;
console.log({ a });//bu satırda b =2
console.log({ b });//bu satırda b=2
*/

//decrement (eşitleyip bir çıkartıyor)
/*
var a = 6;
var b = 3;

a = b--;
console.log({ a });//bu satırda b=3
console.log({ b });// bu satırda b=2
*/


/*var b = 5;

console.log(b++);
console.log(b);
*/

/*
var b = 5;

console.log(++b);
console.log(b);

*/

/*
var a = 5;
var b = 3;



console.log(a % b);
*/

/*
var a = 2;
var b = 3;

console.log(a = b, { a }, { b })
console.log(a += b, { a }, { b })
console.log(a -= b, { a }, { b })
console.log(a *= b, { a }, { b })
console.log(a /= b, { a }, { b })
console.log(a %= b, { a }, { b })
*/

/*
var a = 2;
var b = "2";

console.log("strict equality", a === b)
console.log("equality", a == b)
*/

/*
var a = 2;
var b = "2";

console.log("strict equality", a !== b)
console.log("equality", a != b)
*/

/*
let age = 14;

console.log(age > 14)
*/

/*
console.log(false == false);
console.log(Boolean(0) == false);
console.log(Boolean("0") == false);
console.log(0 == false);
console.log("0" == false)
console.log(typeof null)
console.log(null == false)
console.log(null == true)
console.log(null + 3)
console.log(null == 0)
console.log(Boolean(null) == false)
console.log(Boolean(null) == Boolean(0))
*/

//console.log(typeof NaN)
//Kullanıcıdan slınan veri sayı mı değil mi ?

/*
var a;

while (isNaN(a)) {
    a = prompt("Enter a Number")
    a = Number(a)
    console.log(a, typeof a)
}
*/

/*
console.log(015 + 025) //octal olarak tahmin ettiği için 8 lik sayı sistemine göre hesaplıyor
console.log(15 + 025) //octal olarak tahmin ettiği için 8 lik sayı sistemine göre hesaplıyor
console.log(015 + 25) //octal olarak tahmin ettiği için 8 lik sayı sistemine göre hesaplıyor
console.log(15 + 25) //40
*/

/*
console.log(9 < 8) //false
console.log(9 < 8 < 7) //true
console.log(false < 7) //true
*/

console.log("Clarusway" > "clarusway")
console.log("c".charCodeAt())
console.log("C".charCodeAt())