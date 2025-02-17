console.log(2>1);
console.log(2 >= 1);
console.log(2<1);
console.log(1 == 1);
console.log(2 != 1);

console.log("2" > 1); //true
console.log("02" > 1); //true

console.log(null > 0); //false
console.log(null == 0); //false
console.log(null >= 0); //true
//the reason that equality check == and comparisons <><= work differently
//coparisons convert null to a number , 0 . thats why the above results occur

console.log(undefined == 0); //false
console.log(undefined > 0); //false
console.log(undefined < 0); //false

//strict check ===
console.log("2" == 2); //true
console.log("2" === 2); //false
