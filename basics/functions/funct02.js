// function expression

// 5 + 6 is an expression; first the expression gets executed, then the result gets assigned to the variable a
let a = 5 + 5;

// js treats functions as an object

let add = function(num1, num2){
    return num1 + num2
}

let result = add(5,6)

console.log(result);

// this is treating as an object
let sum = add;

let res2 = sum(6, 7)
console.log(sum);
console.log(res2);