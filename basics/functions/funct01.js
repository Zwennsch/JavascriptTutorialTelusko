function greet(){
    console.log("hello world");
}

greet();

function sum(n1, n2){
    console.log(n1 + n2);
}

sum(5, 7);

function greet2(){
    return "Tach auch";
}

let str = greet2();

console.log(str);

// make sure you do use the single " ` " ! otherwise it isn't going to work
function greet3(user){
    return `Hello ${user}`
}

console.log(greet3("Hans"));