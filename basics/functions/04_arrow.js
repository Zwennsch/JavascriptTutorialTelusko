let greet = function(){
    console.log("Hello World");
    return 1;
}

console.log(greet());


// you can achive the same with the help of arrow-function:

let greet2 = () => {
    console.log("hello w2");
    return 2;
}

console.log(greet2());

// it works even with 2 or more params and you don't have to put curly braces when only one statement

let add = (num1, num2) => num1 + num2;

console.log(add(4, 8));