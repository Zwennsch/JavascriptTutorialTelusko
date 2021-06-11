// Local and global variable


// default value for num3 
function add(num1, num2, num3 = 1){
    return num1 + num2 + num3;
}

console.log(add(3, 6));  //10
console.log(add(3, 6, 7));  //16