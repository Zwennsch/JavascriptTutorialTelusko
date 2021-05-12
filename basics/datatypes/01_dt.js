let data = 8 //number
let word = "Sven" //String
let hex = 0xf //15
let exp = 1.5e3 //1500
let underscore = 10_645_858 //readable for 10645858
let inf = 5/0 //infinity 
let bigInt = 2398564n //BigInt number

console.log(typeof(word))
console.log(typeof(data))
console.log(exp)
console.log(underscore)
console.log(Number.MAX_VALUE)
console.log(Number.MAX_VALUE * 10)  //infinity
console.log(typeof(bigInt))
console.log(bigInt + 2n)
// console.log(bigInt + 2) // error! because 2 is not of type bigint


